

<table>
    <tr>
        <td>id</td>
        <td>url</td>
        <td>target</td>
        <td>method</td>
        <td>data</td>
        <td>response</td>
        <td>response 参数含义</td>
    </tr>
    <tr>
        <td>1</td>
        <td>login.html</td>
        <td>登录页面</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>2</td>
        <td>login.do?ac=&pw=</td>
        <td>登录</td>
        <td>GET</td>
        <td></td>
        <td>{"statuscode":200,"admin":True}</td>
        <td>200:ok</br>201:account not exists</br>202:incorrect password</br>admin:是否为管理员账号</td>
    </tr>
    <tr>
        <td>3</td>
        <td>regis.do</td>
        <td>注册</td>
        <td>POST</td>
        <td>{"account":xxx,"password":xxx,"realname":xxx}</td>
        <td>{"statuscode":200}</td>
        <td>200:ok</br>201:account exists</br>202:other</td>
    </tr>
</table>
<table>
    <tr>
        <td>id</td>
        <td>url</td>
        <td>target</td>
        <td>method</td>
        <td>data</td>
        <td>response</td>
        <td>response 参数含义</td>
    </tr>
    <tr>
        <td>4</td>
        <td>home.html</td>
        <td>主页</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>5</td>
        <td>swPlan.do</td>
        <td>工作室规划列表</td>
        <td>GET</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>6</td>
        <td>swProjectList.do</td>
        <td>工作室项目列表</td>
        <td>GET</td>
        <td></td>
        <td>[{"id":xxx,"updateTime":xxx,"title":xxx,"lastState":xxx},</br>{"id":xxx,"updateTime":xxx,"title":xxx,"lastState":xxx}]</td>
        <td>id:该条目id</br>updateTime:上次更新时</br>title:项目名称</br>lastState:上次更新内容</td>
    </tr>
    <tr>
        <td>a1</td>
        <td>swProjectDetail.do?id=</td>
        <td>工作室项目列表</td>
        <td>GET</td>
        <td></td>
        <td>[{"time":xxx,"content":xxx,"state":"completed"},</br>{"time":xxx,"content":xxx,"state":"incompleted"},</br>{"time":xxx,"content":xxx,"state":"failed"}]</td>
        <td>id:该条目id</br>updateTime:上次更新时</br>title:项目名称</br>lastState:上次更新内容</td>
    </tr>
    <tr>
        <td>7</td>
        <td>swMemberList.do</td>
        <td>工作室成员列表</td>
        <td>GET</td>
        <td></td>
        <td>[{"id":xxx,"account":xxx,"isOnline":False,"pertag":xxx,"isCaptain":False},</br>{"id":xxx,"account":xxx,"isOnline":True,"pertag":xxx,"isCaptain":True}]</td>
        <td>account:..</br>pertag:个人标签</br>isCaptain:是否是项目组长</br>isOnline:是否在线</td>
    </tr>
    <tr>
        <td>8</td>
        <td>swNotAuditedProjectList.do</td>
        <td>待审核项目列表</td>
        <td>POST</td>
        <td></td>
        <td>[{"captainId":xxx,"members":[1,2,3],"title":xxx,"overview":"xxx","docHref":xxx}]</td>
        <td>200:success</br>201:failed</td>
    </tr>
    <tr>
        <td>9</td>
        <td>swUpdateProject.do</td>
        <td>更新项目进度</td>
        <td>POST</td>
        <td>{"captainId":xxx,"content":xxx}</td>
        <td>{"statuscode":200}</td>
        <td>200:success</br>201:failed</td>
    </tr>
    <tr>
        <td>10</td>
        <td>swSCOpenDir.do?targetpath=</td>
        <td>返回目标目录下文件</td>
        <td>GET</td>
        <td></td>
        <td>{"statuscode":200,"content":[{"name":xxx,"isDir":False},<br>{"name":xxx,"isDir":True}]}</td>
        <td>200:success</br>201:path not exists</br>202:path is not a dir</td>
    </tr>
    <tr>
        <td>11</td>
        <td>swSCUploadFile.do</td>
        <td>ServerConsole上传文件</td>
        <td>POST</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>12</td>
        <td>swSCDownload.do?targetpath=</td>
        <td>ServerConsole下载文件</td>
        <td>GET</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
<table>
    <tr>
        <td>id</td>
        <td>url</td>
        <td>target</td>
        <td>method</td>
        <td>data</td>
        <td>response</td>
        <td>response 参数含义</td>
    </tr>
    <tr>
        <td>13</td>
        <td>swDocuments.html</td>
        <td>工作室资料库</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>14</td>
        <td>swDocOpenDir.do?targetpath=</td>
        <td>资料库打开目录</td>
        <td>GET</td>
        <td></td>
        <td>{"statuscode":200,"content":[{"name":xxx,"isDir":False},<br>{"name":xxx,"isDir":True}]}</td>
        <td>200:success</br>201:path not exists</br>202:path is not a dir</td>
    </tr>
    <tr>
        <td>15</td>
        <td>swDocFileDetail.do?targetpath=</td>
        <td>获取目标详细信息</td>
        <td>GET</td>
        <td></td>
        <td>{"statuscode":200,"data":{"title":xxx,"type":xxx,"size":xxx,"uploadTime":xxx}}</td>
        <td>200:ok</br>201:path not exists</td>
    </tr>
    <tr>
        <td>16</td>
        <td>swDocUpload.do?targetpath=</td>
        <td>上传文件</td>
        <td>POST</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>17</td>
        <td>swDocDownload.do?targetpath=</td>
        <td>下载文件</td>
        <td>GET</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>18</td>
        <td>swDocLoadFile.do?targetpath=</td>
        <td>加载文件</td>
        <td>GET</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>19</td>
        <td>swDocSaveFile.do</td>
        <td>存储编辑的文件</td>
        <td>POST</td>
        <td>{"content":xxx}</td>
        <td>{"statuscode":220}</td>
        <td>200:ok</br>201:target not exists</td>
    </tr>
    <tr>
        <td>20</td>
        <td>swDocDelFile.do?targetpath=</td>
        <td>删除文件</td>
        <td>GET</td>
        <td></td>
        <td>{"statuscode":200}</td>
        <td>200:success</br>201:operation denied</br>202:path not exists</br></td>
    </tr>
</table>
<table>
    <tr>
        <td>id</td>
        <td>url</td>
        <td>target</td>
        <td>method</td>
        <td>data</td>
        <td>response</td>
        <td>response 参数含义</td>
    </tr>
    <tr>
        <td>21</td>
        <td>swRegisProject.html</td>
        <td>登记项目</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>22</td>
        <td>swRPAvailableMembers.do</td>
        <td>获取无项目成员</td>
        <td>GET</td>
        <td></td>
        <td>[1,2,3]</td>
        <td>返回可用成员的id list</td>
    </tr>
    <tr>
        <td>23</td>
        <td>swRegisProject.do</td>
        <td>提交项目信息</td>
        <td>POST</td>
        <td>form content:</br>captainId:xxx,</br>members:[1,2,3]</br>title:xxx,</br>overview:xxx,</br>projectDoc:xxx</td>
        <td>{"statuscode":200}</td>
        <td>200:ok</br>201:failed</td>
    </tr>
</table>
<table>
    <tr>
        <td>id</td>
        <td>url</td>
        <td>target</td>
        <td>method</td>
        <td>data</td>
        <td>response</td>
        <td>response 参数含义</td>
    </tr>
    </tr>
        <td>24</td>
        <td>swPrivatePage.html?id=</td>
        <td>id为目标成员的id</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>25</td>
        <td>swPriHeadImg.do?id=</td>
        <td>获取个人头像</td>
        <td>GET</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>26</td>
        <td>swPersonDetail.do?id=</td>
        <td>获取个人详细资料（个人信息、当前项目、历史项目）</td>
        <td>GET</td>
        <td></td>
        <td>{"id":xxx,"account":xxx,"curProjectId":xxx,"achievements":[1,4,2]}</td>
        <td></td>
    </tr>
</table>
<table>
    <tr>
        <td>id</td>
        <td>url</td>
        <td>target</td>
        <td>method</td>
        <td>data</td>
        <td>response</td>
        <td>response 参数含义</td>
    </tr>
    <tr>
        <td>27</td>
        <td>swPlanUpdate.do</td>
        <td>更新条目</td>
        <td>POST</td>
        <td>{"target_id":xxx,"content":xxx}</td>
        <td>{"statuscode":200}</td>
        <td>200:ok</br>201:failed</td>
    </tr>
    <tr>
        <td>28</td>
        <td>swAddPlan.do</td>
        <td>增加条目</td>
        <td>POST</td>
        <td>{"content":xxx}</td>
        <td>{"statuscode":200}</td>
        <td>200:ok</br>201:failed</td>
    </tr>
    <tr>
        <td>29</td>
        <td>swSendNotice.do</td>
        <td>通知目标成员</td>
        <td>POST</td>
        <td>{"target_id":xxx,"content":xxx}</td>
        <td>{"statuscode":200}</td>
        <td>200:ok</br>201:failed</td>
    </tr>
</table>