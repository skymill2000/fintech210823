from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
driver.get("https://www.jnilbo.com/view/media/view?code=2021082616175071931")
title = driver.find_element_by_xpath(
    '//*[@id="container"]/div[1]/div[1]/div[1]/div[2]/p[1]')
print(title.text)
