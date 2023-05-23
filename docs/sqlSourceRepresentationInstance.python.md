# `google_sql_source_representation_instance`

Refer to the Terraform Registory for docs: [`google_sql_source_representation_instance`](https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance).

# `sqlSourceRepresentationInstance` Submodule <a name="`sqlSourceRepresentationInstance` Submodule" id="@cdktf/provider-google.sqlSourceRepresentationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlSourceRepresentationInstance <a name="SqlSourceRepresentationInstance" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance google_sql_source_representation_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sql_source_representation_instance

sqlSourceRepresentationInstance.SqlSourceRepresentationInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_version: str,
  host: str,
  name: str,
  ca_certificate: str = None,
  client_certificate: str = None,
  client_key: str = None,
  dump_file_path: str = None,
  id: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  project: str = None,
  region: str = None,
  timeouts: SqlSourceRepresentationInstanceTimeouts = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.databaseVersion">database_version</a></code> | <code>str</code> | The MySQL version running on your source database server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.host">host</a></code> | <code>str</code> | The externally accessible IPv4 address for the source database server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the source representation instance. Use any valid Cloud SQL instance name. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.caCertificate">ca_certificate</a></code> | <code>str</code> | The CA certificate on the external server. Include only if SSL/TLS is used on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.clientCertificate">client_certificate</a></code> | <code>str</code> | The client certificate on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.clientKey">client_key</a></code> | <code>str</code> | The private key file for the client certificate on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.dumpFilePath">dump_file_path</a></code> | <code>str</code> | A file in the bucket that contains the data from the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#id SqlSourceRepresentationInstance#id}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.password">password</a></code> | <code>str</code> | The password for the replication user account. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The externally accessible port for the source database server. Defaults to 3306. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#project SqlSourceRepresentationInstance#project}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created instance should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.username">username</a></code> | <code>str</code> | The replication user account on the external server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.databaseVersion"></a>

- *Type:* str

The MySQL version running on your source database server.

Possible values: ["MYSQL_5_6", "MYSQL_5_7", "MYSQL_8_0", "POSTGRES_9_6", "POSTGRES_10", "POSTGRES_11", "POSTGRES_12", "POSTGRES_13", "POSTGRES_14"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#database_version SqlSourceRepresentationInstance#database_version}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.host"></a>

- *Type:* str

The externally accessible IPv4 address for the source database server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#host SqlSourceRepresentationInstance#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.name"></a>

- *Type:* str

The name of the source representation instance. Use any valid Cloud SQL instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#name SqlSourceRepresentationInstance#name}

---

##### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.caCertificate"></a>

- *Type:* str

The CA certificate on the external server. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#ca_certificate SqlSourceRepresentationInstance#ca_certificate}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.clientCertificate"></a>

- *Type:* str

The client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#client_certificate SqlSourceRepresentationInstance#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.clientKey"></a>

- *Type:* str

The private key file for the client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#client_key SqlSourceRepresentationInstance#client_key}

---

##### `dump_file_path`<sup>Optional</sup> <a name="dump_file_path" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.dumpFilePath"></a>

- *Type:* str

A file in the bucket that contains the data from the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#dump_file_path SqlSourceRepresentationInstance#dump_file_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#id SqlSourceRepresentationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.password"></a>

- *Type:* str

The password for the replication user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#password SqlSourceRepresentationInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The externally accessible port for the source database server. Defaults to 3306.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#port SqlSourceRepresentationInstance#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#project SqlSourceRepresentationInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created instance should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#region SqlSourceRepresentationInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#timeouts SqlSourceRepresentationInstance#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.username"></a>

- *Type:* str

The replication user account on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#username SqlSourceRepresentationInstance#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetCaCertificate">reset_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientKey">reset_client_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetDumpFilePath">reset_dump_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#create SqlSourceRepresentationInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#delete SqlSourceRepresentationInstance#delete}.

---

##### `reset_ca_certificate` <a name="reset_ca_certificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetCaCertificate"></a>

```python
def reset_ca_certificate() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientKey"></a>

```python
def reset_client_key() -> None
```

##### `reset_dump_file_path` <a name="reset_dump_file_path" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetDumpFilePath"></a>

```python
def reset_dump_file_path() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import sql_source_representation_instance

sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import sql_source_representation_instance

sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import sql_source_representation_instance

sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference">SqlSourceRepresentationInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersionInput">database_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePathInput">dump_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePath">dump_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeouts"></a>

```python
timeouts: SqlSourceRepresentationInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference">SqlSourceRepresentationInstanceTimeoutsOutputReference</a>

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `database_version_input`<sup>Optional</sup> <a name="database_version_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersionInput"></a>

```python
database_version_input: str
```

- *Type:* str

---

##### `dump_file_path_input`<sup>Optional</sup> <a name="dump_file_path_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePathInput"></a>

```python
dump_file_path_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SqlSourceRepresentationInstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `dump_file_path`<sup>Required</sup> <a name="dump_file_path" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePath"></a>

```python
dump_file_path: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SqlSourceRepresentationInstanceConfig <a name="SqlSourceRepresentationInstanceConfig" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sql_source_representation_instance

sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_version: str,
  host: str,
  name: str,
  ca_certificate: str = None,
  client_certificate: str = None,
  client_key: str = None,
  dump_file_path: str = None,
  id: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  project: str = None,
  region: str = None,
  timeouts: SqlSourceRepresentationInstanceTimeouts = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.databaseVersion">database_version</a></code> | <code>str</code> | The MySQL version running on your source database server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.host">host</a></code> | <code>str</code> | The externally accessible IPv4 address for the source database server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.name">name</a></code> | <code>str</code> | The name of the source representation instance. Use any valid Cloud SQL instance name. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.caCertificate">ca_certificate</a></code> | <code>str</code> | The CA certificate on the external server. Include only if SSL/TLS is used on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | The client certificate on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientKey">client_key</a></code> | <code>str</code> | The private key file for the client certificate on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dumpFilePath">dump_file_path</a></code> | <code>str</code> | A file in the bucket that contains the data from the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#id SqlSourceRepresentationInstance#id}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.password">password</a></code> | <code>str</code> | The password for the replication user account. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The externally accessible port for the source database server. Defaults to 3306. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#project SqlSourceRepresentationInstance#project}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created instance should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.username">username</a></code> | <code>str</code> | The replication user account on the external server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

The MySQL version running on your source database server.

Possible values: ["MYSQL_5_6", "MYSQL_5_7", "MYSQL_8_0", "POSTGRES_9_6", "POSTGRES_10", "POSTGRES_11", "POSTGRES_12", "POSTGRES_13", "POSTGRES_14"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#database_version SqlSourceRepresentationInstance#database_version}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The externally accessible IPv4 address for the source database server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#host SqlSourceRepresentationInstance#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the source representation instance. Use any valid Cloud SQL instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#name SqlSourceRepresentationInstance#name}

---

##### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

The CA certificate on the external server. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#ca_certificate SqlSourceRepresentationInstance#ca_certificate}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

The client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#client_certificate SqlSourceRepresentationInstance#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

The private key file for the client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#client_key SqlSourceRepresentationInstance#client_key}

---

##### `dump_file_path`<sup>Optional</sup> <a name="dump_file_path" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dumpFilePath"></a>

```python
dump_file_path: str
```

- *Type:* str

A file in the bucket that contains the data from the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#dump_file_path SqlSourceRepresentationInstance#dump_file_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#id SqlSourceRepresentationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password for the replication user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#password SqlSourceRepresentationInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The externally accessible port for the source database server. Defaults to 3306.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#port SqlSourceRepresentationInstance#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#project SqlSourceRepresentationInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created instance should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#region SqlSourceRepresentationInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.timeouts"></a>

```python
timeouts: SqlSourceRepresentationInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#timeouts SqlSourceRepresentationInstance#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The replication user account on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#username SqlSourceRepresentationInstance#username}

---

### SqlSourceRepresentationInstanceTimeouts <a name="SqlSourceRepresentationInstanceTimeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sql_source_representation_instance

sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#create SqlSourceRepresentationInstance#create}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#delete SqlSourceRepresentationInstance#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#create SqlSourceRepresentationInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.66.0/docs/resources/sql_source_representation_instance#delete SqlSourceRepresentationInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlSourceRepresentationInstanceTimeoutsOutputReference <a name="SqlSourceRepresentationInstanceTimeoutsOutputReference" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sql_source_representation_instance

sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SqlSourceRepresentationInstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>, cdktf.IResolvable]

---



