# `netappActiveDirectory` Submodule <a name="`netappActiveDirectory` Submodule" id="@cdktf/provider-google.netappActiveDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappActiveDirectory <a name="NetappActiveDirectory" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory google_netapp_active_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_active_directory

netappActiveDirectory.NetappActiveDirectory(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns: str,
  domain: str,
  location: str,
  name: str,
  net_bios_prefix: str,
  password: str,
  username: str,
  administrators: typing.List[str] = None,
  aes_encryption: typing.Union[bool, IResolvable] = None,
  backup_operators: typing.List[str] = None,
  description: str = None,
  encrypt_dc_connections: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kdc_hostname: str = None,
  kdc_ip: str = None,
  labels: typing.Mapping[str] = None,
  ldap_signing: typing.Union[bool, IResolvable] = None,
  nfs_users_with_ldap: typing.Union[bool, IResolvable] = None,
  organizational_unit: str = None,
  project: str = None,
  security_operators: typing.List[str] = None,
  site: str = None,
  timeouts: NetappActiveDirectoryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.dns">dns</a></code> | <code>str</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.location">location</a></code> | <code>str</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.netBiosPrefix">net_bios_prefix</a></code> | <code>str</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for specified username. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.username">username</a></code> | <code>str</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.administrators">administrators</a></code> | <code>typing.List[str]</code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.aesEncryption">aes_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.backupOperators">backup_operators</a></code> | <code>typing.List[str]</code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.encryptDcConnections">encrypt_dc_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.kdcHostname">kdc_hostname</a></code> | <code>str</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.kdcIp">kdc_ip</a></code> | <code>str</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.ldapSigning">ldap_signing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.nfsUsersWithLdap">nfs_users_with_ldap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.securityOperators">security_operators</a></code> | <code>typing.List[str]</code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.site">site</a></code> | <code>str</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.dns"></a>

- *Type:* str

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#dns NetappActiveDirectory#dns}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.domain"></a>

- *Type:* str

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#domain NetappActiveDirectory#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.location"></a>

- *Type:* str

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#location NetappActiveDirectory#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#name NetappActiveDirectory#name}

---

##### `net_bios_prefix`<sup>Required</sup> <a name="net_bios_prefix" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.netBiosPrefix"></a>

- *Type:* str

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#net_bios_prefix NetappActiveDirectory#net_bios_prefix}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.password"></a>

- *Type:* str

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#password NetappActiveDirectory#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.username"></a>

- *Type:* str

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#username NetappActiveDirectory#username}

---

##### `administrators`<sup>Optional</sup> <a name="administrators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.administrators"></a>

- *Type:* typing.List[str]

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#administrators NetappActiveDirectory#administrators}

---

##### `aes_encryption`<sup>Optional</sup> <a name="aes_encryption" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.aesEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#aes_encryption NetappActiveDirectory#aes_encryption}

---

##### `backup_operators`<sup>Optional</sup> <a name="backup_operators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.backupOperators"></a>

- *Type:* typing.List[str]

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#backup_operators NetappActiveDirectory#backup_operators}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#description NetappActiveDirectory#description}

---

##### `encrypt_dc_connections`<sup>Optional</sup> <a name="encrypt_dc_connections" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.encryptDcConnections"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#encrypt_dc_connections NetappActiveDirectory#encrypt_dc_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kdc_hostname`<sup>Optional</sup> <a name="kdc_hostname" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.kdcHostname"></a>

- *Type:* str

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#kdc_hostname NetappActiveDirectory#kdc_hostname}

---

##### `kdc_ip`<sup>Optional</sup> <a name="kdc_ip" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.kdcIp"></a>

- *Type:* str

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#kdc_ip NetappActiveDirectory#kdc_ip}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#labels NetappActiveDirectory#labels}

---

##### `ldap_signing`<sup>Optional</sup> <a name="ldap_signing" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.ldapSigning"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#ldap_signing NetappActiveDirectory#ldap_signing}

---

##### `nfs_users_with_ldap`<sup>Optional</sup> <a name="nfs_users_with_ldap" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.nfsUsersWithLdap"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#nfs_users_with_ldap NetappActiveDirectory#nfs_users_with_ldap}

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.organizationalUnit"></a>

- *Type:* str

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#organizational_unit NetappActiveDirectory#organizational_unit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}.

---

##### `security_operators`<sup>Optional</sup> <a name="security_operators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.securityOperators"></a>

- *Type:* typing.List[str]

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#security_operators NetappActiveDirectory#security_operators}

---

##### `site`<sup>Optional</sup> <a name="site" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.site"></a>

- *Type:* str

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#site NetappActiveDirectory#site}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#timeouts NetappActiveDirectory#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAdministrators">reset_administrators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAesEncryption">reset_aes_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetBackupOperators">reset_backup_operators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetEncryptDcConnections">reset_encrypt_dc_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcHostname">reset_kdc_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcIp">reset_kdc_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLdapSigning">reset_ldap_signing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetNfsUsersWithLdap">reset_nfs_users_with_ldap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSecurityOperators">reset_security_operators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSite">reset_site</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#create NetappActiveDirectory#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#delete NetappActiveDirectory#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#update NetappActiveDirectory#update}.

---

##### `reset_administrators` <a name="reset_administrators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAdministrators"></a>

```python
def reset_administrators() -> None
```

##### `reset_aes_encryption` <a name="reset_aes_encryption" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAesEncryption"></a>

```python
def reset_aes_encryption() -> None
```

##### `reset_backup_operators` <a name="reset_backup_operators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetBackupOperators"></a>

```python
def reset_backup_operators() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encrypt_dc_connections` <a name="reset_encrypt_dc_connections" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetEncryptDcConnections"></a>

```python
def reset_encrypt_dc_connections() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kdc_hostname` <a name="reset_kdc_hostname" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcHostname"></a>

```python
def reset_kdc_hostname() -> None
```

##### `reset_kdc_ip` <a name="reset_kdc_ip" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcIp"></a>

```python
def reset_kdc_ip() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_ldap_signing` <a name="reset_ldap_signing" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLdapSigning"></a>

```python
def reset_ldap_signing() -> None
```

##### `reset_nfs_users_with_ldap` <a name="reset_nfs_users_with_ldap" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetNfsUsersWithLdap"></a>

```python
def reset_nfs_users_with_ldap() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_security_operators` <a name="reset_security_operators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSecurityOperators"></a>

```python
def reset_security_operators() -> None
```

##### `reset_site` <a name="reset_site" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSite"></a>

```python
def reset_site() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappActiveDirectory resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import netapp_active_directory

netappActiveDirectory.NetappActiveDirectory.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import netapp_active_directory

netappActiveDirectory.NetappActiveDirectory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import netapp_active_directory

netappActiveDirectory.NetappActiveDirectory.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import netapp_active_directory

netappActiveDirectory.NetappActiveDirectory.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappActiveDirectory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappActiveDirectory to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappActiveDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappActiveDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference">NetappActiveDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administratorsInput">administrators_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryptionInput">aes_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperatorsInput">backup_operators_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dnsInput">dns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnectionsInput">encrypt_dc_connections_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostnameInput">kdc_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIpInput">kdc_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigningInput">ldap_signing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefixInput">net_bios_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdapInput">nfs_users_with_ldap_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperatorsInput">security_operators_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.siteInput">site_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administrators">administrators</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryption">aes_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperators">backup_operators</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dns">dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnections">encrypt_dc_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostname">kdc_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIp">kdc_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigning">ldap_signing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefix">net_bios_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdap">nfs_users_with_ldap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperators">security_operators</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.site">site</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeouts"></a>

```python
timeouts: NetappActiveDirectoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference">NetappActiveDirectoryTimeoutsOutputReference</a>

---

##### `administrators_input`<sup>Optional</sup> <a name="administrators_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administratorsInput"></a>

```python
administrators_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aes_encryption_input`<sup>Optional</sup> <a name="aes_encryption_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryptionInput"></a>

```python
aes_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_operators_input`<sup>Optional</sup> <a name="backup_operators_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperatorsInput"></a>

```python
backup_operators_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dnsInput"></a>

```python
dns_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `encrypt_dc_connections_input`<sup>Optional</sup> <a name="encrypt_dc_connections_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnectionsInput"></a>

```python
encrypt_dc_connections_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kdc_hostname_input`<sup>Optional</sup> <a name="kdc_hostname_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostnameInput"></a>

```python
kdc_hostname_input: str
```

- *Type:* str

---

##### `kdc_ip_input`<sup>Optional</sup> <a name="kdc_ip_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIpInput"></a>

```python
kdc_ip_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ldap_signing_input`<sup>Optional</sup> <a name="ldap_signing_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigningInput"></a>

```python
ldap_signing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `net_bios_prefix_input`<sup>Optional</sup> <a name="net_bios_prefix_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefixInput"></a>

```python
net_bios_prefix_input: str
```

- *Type:* str

---

##### `nfs_users_with_ldap_input`<sup>Optional</sup> <a name="nfs_users_with_ldap_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdapInput"></a>

```python
nfs_users_with_ldap_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `security_operators_input`<sup>Optional</sup> <a name="security_operators_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperatorsInput"></a>

```python
security_operators_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_input`<sup>Optional</sup> <a name="site_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.siteInput"></a>

```python
site_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetappActiveDirectoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `administrators`<sup>Required</sup> <a name="administrators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administrators"></a>

```python
administrators: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aes_encryption`<sup>Required</sup> <a name="aes_encryption" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryption"></a>

```python
aes_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_operators`<sup>Required</sup> <a name="backup_operators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperators"></a>

```python
backup_operators: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dns"></a>

```python
dns: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `encrypt_dc_connections`<sup>Required</sup> <a name="encrypt_dc_connections" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnections"></a>

```python
encrypt_dc_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kdc_hostname`<sup>Required</sup> <a name="kdc_hostname" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostname"></a>

```python
kdc_hostname: str
```

- *Type:* str

---

##### `kdc_ip`<sup>Required</sup> <a name="kdc_ip" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIp"></a>

```python
kdc_ip: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ldap_signing`<sup>Required</sup> <a name="ldap_signing" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigning"></a>

```python
ldap_signing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `net_bios_prefix`<sup>Required</sup> <a name="net_bios_prefix" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefix"></a>

```python
net_bios_prefix: str
```

- *Type:* str

---

##### `nfs_users_with_ldap`<sup>Required</sup> <a name="nfs_users_with_ldap" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdap"></a>

```python
nfs_users_with_ldap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_operators`<sup>Required</sup> <a name="security_operators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperators"></a>

```python
security_operators: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.site"></a>

```python
site: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappActiveDirectoryConfig <a name="NetappActiveDirectoryConfig" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_active_directory

netappActiveDirectory.NetappActiveDirectoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns: str,
  domain: str,
  location: str,
  name: str,
  net_bios_prefix: str,
  password: str,
  username: str,
  administrators: typing.List[str] = None,
  aes_encryption: typing.Union[bool, IResolvable] = None,
  backup_operators: typing.List[str] = None,
  description: str = None,
  encrypt_dc_connections: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kdc_hostname: str = None,
  kdc_ip: str = None,
  labels: typing.Mapping[str] = None,
  ldap_signing: typing.Union[bool, IResolvable] = None,
  nfs_users_with_ldap: typing.Union[bool, IResolvable] = None,
  organizational_unit: str = None,
  project: str = None,
  security_operators: typing.List[str] = None,
  site: str = None,
  timeouts: NetappActiveDirectoryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dns">dns</a></code> | <code>str</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.domain">domain</a></code> | <code>str</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.location">location</a></code> | <code>str</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.name">name</a></code> | <code>str</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.netBiosPrefix">net_bios_prefix</a></code> | <code>str</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.password">password</a></code> | <code>str</code> | Password for specified username. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.username">username</a></code> | <code>str</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.administrators">administrators</a></code> | <code>typing.List[str]</code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.aesEncryption">aes_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.backupOperators">backup_operators</a></code> | <code>typing.List[str]</code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.encryptDcConnections">encrypt_dc_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcHostname">kdc_hostname</a></code> | <code>str</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcIp">kdc_ip</a></code> | <code>str</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.ldapSigning">ldap_signing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.nfsUsersWithLdap">nfs_users_with_ldap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.securityOperators">security_operators</a></code> | <code>typing.List[str]</code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.site">site</a></code> | <code>str</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dns"></a>

```python
dns: str
```

- *Type:* str

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#dns NetappActiveDirectory#dns}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#domain NetappActiveDirectory#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#location NetappActiveDirectory#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#name NetappActiveDirectory#name}

---

##### `net_bios_prefix`<sup>Required</sup> <a name="net_bios_prefix" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.netBiosPrefix"></a>

```python
net_bios_prefix: str
```

- *Type:* str

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#net_bios_prefix NetappActiveDirectory#net_bios_prefix}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#password NetappActiveDirectory#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#username NetappActiveDirectory#username}

---

##### `administrators`<sup>Optional</sup> <a name="administrators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.administrators"></a>

```python
administrators: typing.List[str]
```

- *Type:* typing.List[str]

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#administrators NetappActiveDirectory#administrators}

---

##### `aes_encryption`<sup>Optional</sup> <a name="aes_encryption" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.aesEncryption"></a>

```python
aes_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#aes_encryption NetappActiveDirectory#aes_encryption}

---

##### `backup_operators`<sup>Optional</sup> <a name="backup_operators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.backupOperators"></a>

```python
backup_operators: typing.List[str]
```

- *Type:* typing.List[str]

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#backup_operators NetappActiveDirectory#backup_operators}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#description NetappActiveDirectory#description}

---

##### `encrypt_dc_connections`<sup>Optional</sup> <a name="encrypt_dc_connections" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.encryptDcConnections"></a>

```python
encrypt_dc_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#encrypt_dc_connections NetappActiveDirectory#encrypt_dc_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kdc_hostname`<sup>Optional</sup> <a name="kdc_hostname" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcHostname"></a>

```python
kdc_hostname: str
```

- *Type:* str

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#kdc_hostname NetappActiveDirectory#kdc_hostname}

---

##### `kdc_ip`<sup>Optional</sup> <a name="kdc_ip" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcIp"></a>

```python
kdc_ip: str
```

- *Type:* str

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#kdc_ip NetappActiveDirectory#kdc_ip}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#labels NetappActiveDirectory#labels}

---

##### `ldap_signing`<sup>Optional</sup> <a name="ldap_signing" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.ldapSigning"></a>

```python
ldap_signing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#ldap_signing NetappActiveDirectory#ldap_signing}

---

##### `nfs_users_with_ldap`<sup>Optional</sup> <a name="nfs_users_with_ldap" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.nfsUsersWithLdap"></a>

```python
nfs_users_with_ldap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#nfs_users_with_ldap NetappActiveDirectory#nfs_users_with_ldap}

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#organizational_unit NetappActiveDirectory#organizational_unit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}.

---

##### `security_operators`<sup>Optional</sup> <a name="security_operators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.securityOperators"></a>

```python
security_operators: typing.List[str]
```

- *Type:* typing.List[str]

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#security_operators NetappActiveDirectory#security_operators}

---

##### `site`<sup>Optional</sup> <a name="site" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.site"></a>

```python
site: str
```

- *Type:* str

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#site NetappActiveDirectory#site}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.timeouts"></a>

```python
timeouts: NetappActiveDirectoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#timeouts NetappActiveDirectory#timeouts}

---

### NetappActiveDirectoryTimeouts <a name="NetappActiveDirectoryTimeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_active_directory

netappActiveDirectory.NetappActiveDirectoryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#create NetappActiveDirectory#create}. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#delete NetappActiveDirectory#delete}. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#update NetappActiveDirectory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#create NetappActiveDirectory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#delete NetappActiveDirectory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/netapp_active_directory#update NetappActiveDirectory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappActiveDirectoryTimeoutsOutputReference <a name="NetappActiveDirectoryTimeoutsOutputReference" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_active_directory

netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappActiveDirectoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>]

---



