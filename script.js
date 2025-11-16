// 主要功能脚本
document.addEventListener('DOMContentLoaded', function() {
    // 初始化AOS动画库
    AOS.init({
        duration: 700,
        easing: 'ease-in-out',
        once: true
    });
    
    // 移动端菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('open');
    });
    
    // 教程标签切换
    const tutorialTabs = document.querySelectorAll('.tutorial-tab');
    const tutorialContents = document.querySelectorAll('.tutorial-content');
    
    tutorialTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 移除所有标签的活动状态
            tutorialTabs.forEach(t => {
                t.classList.remove('active', 'bg-primary', 'text-white');
                t.classList.add('bg-gray-200', 'text-gray-700');
            });
            
            // 添加当前标签的活动状态
            this.classList.add('active', 'bg-primary', 'text-white');
            this.classList.remove('bg-gray-200', 'text-gray-700');
            
            // 隐藏所有内容
            tutorialContents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('active');
            });
            
            // 显示当前内容
            document.getElementById(`${tabId}-tab`).classList.remove('hidden');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // FAQ手风琴效果
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            answer.classList.toggle('hidden');
            if (answer.classList.contains('hidden')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(180deg)';
            }
            this.setAttribute('aria-expanded', (!answer.classList.contains('hidden')).toString());
            answer.setAttribute('aria-hidden', (answer.classList.contains('hidden')).toString());
            answer.setAttribute('role', 'region');
        });
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // 返回顶部按钮
    const backToTopButton = document.getElementById('back-to-top');
    
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.add('opacity-0', 'invisible');
            backToTopButton.classList.remove('opacity-100', 'visible');
        }
        if (window.pageYOffset > 40) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 减去导航栏高度
                    behavior: 'smooth'
                });
                
                // 如果是移动端，点击后关闭菜单
                if (window.innerWidth < 768) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('open');
                }
            }
        });
    });
});