# `bigqueryConnection` Submodule <a name="`bigqueryConnection` Submodule" id="@cdktf/provider-google.bigqueryConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryConnection <a name="BigqueryConnection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection google_bigquery_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws: BigqueryConnectionAws = None,
  azure: BigqueryConnectionAzure = None,
  cloud_resource: BigqueryConnectionCloudResource = None,
  cloud_spanner: BigqueryConnectionCloudSpanner = None,
  cloud_sql: BigqueryConnectionCloudSql = None,
  connection_id: str = None,
  description: str = None,
  friendly_name: str = None,
  id: str = None,
  kms_key_name: str = None,
  location: str = None,
  project: str = None,
  spark: BigqueryConnectionSpark = None,
  timeouts: BigqueryConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.azure">azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudResource">cloud_resource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudSpanner">cloud_spanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudSql">cloud_sql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.description">description</a></code> | <code>str</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#id BigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Optional. The Cloud KMS key that is used for encryption. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#project BigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#aws BigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.azure"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#azure BigqueryConnection#azure}

---

##### `cloud_resource`<sup>Optional</sup> <a name="cloud_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudResource"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#cloud_resource BigqueryConnection#cloud_resource}

---

##### `cloud_spanner`<sup>Optional</sup> <a name="cloud_spanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudSpanner"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#cloud_spanner BigqueryConnection#cloud_spanner}

---

##### `cloud_sql`<sup>Optional</sup> <a name="cloud_sql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.cloudSql"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#cloud_sql BigqueryConnection#cloud_sql}

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.connectionId"></a>

- *Type:* str

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#connection_id BigqueryConnection#connection_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.description"></a>

- *Type:* str

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#description BigqueryConnection#description}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.friendlyName"></a>

- *Type:* str

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#friendly_name BigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#id BigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

Optional. The Cloud KMS key that is used for encryption.

Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#kms_key_name BigqueryConnection#kms_key_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#location BigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#project BigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.spark"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#spark BigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#timeouts BigqueryConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws">put_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource">put_cloud_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner">put_cloud_spanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql">put_cloud_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putSpark">put_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAws">reset_aws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudResource">reset_cloud_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSpanner">reset_cloud_spanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSql">reset_cloud_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetSpark">reset_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws` <a name="put_aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws"></a>

```python
def put_aws(
  access_role: BigqueryConnectionAwsAccessRole
) -> None
```

###### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAws.parameter.accessRole"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#access_role BigqueryConnection#access_role}

---

##### `put_azure` <a name="put_azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure"></a>

```python
def put_azure(
  customer_tenant_id: str,
  federated_application_client_id: str = None
) -> None
```

###### `customer_tenant_id`<sup>Required</sup> <a name="customer_tenant_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure.parameter.customerTenantId"></a>

- *Type:* str

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#customer_tenant_id BigqueryConnection#customer_tenant_id}

---

###### `federated_application_client_id`<sup>Optional</sup> <a name="federated_application_client_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putAzure.parameter.federatedApplicationClientId"></a>

- *Type:* str

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#federated_application_client_id BigqueryConnection#federated_application_client_id}

---

##### `put_cloud_resource` <a name="put_cloud_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudResource"></a>

```python
def put_cloud_resource() -> None
```

##### `put_cloud_spanner` <a name="put_cloud_spanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner"></a>

```python
def put_cloud_spanner(
  database: str,
  database_role: str = None,
  max_parallelism: typing.Union[int, float] = None,
  use_data_boost: typing.Union[bool, IResolvable] = None,
  use_parallelism: typing.Union[bool, IResolvable] = None,
  use_serverless_analytics: typing.Union[bool, IResolvable] = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner.parameter.database"></a>

- *Type:* str

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#database BigqueryConnection#database}

---

###### `database_role`<sup>Optional</sup> <a name="database_role" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner.parameter.databaseRole"></a>

- *Type:* str

Cloud Spanner database role for fine-grained access control.

The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#database_role BigqueryConnection#database_role}

---

###### `max_parallelism`<sup>Optional</sup> <a name="max_parallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner.parameter.maxParallelism"></a>

- *Type:* typing.Union[int, float]

Allows setting max parallelism per query when executing on Spanner independent compute resources.

If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#max_parallelism BigqueryConnection#max_parallelism}

---

###### `use_data_boost`<sup>Optional</sup> <a name="use_data_boost" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner.parameter.useDataBoost"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the request will be executed via Spanner independent compute resources.

'use_parallelism' must be set when using data boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#use_data_boost BigqueryConnection#use_data_boost}

---

###### `use_parallelism`<sup>Optional</sup> <a name="use_parallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner.parameter.useParallelism"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#use_parallelism BigqueryConnection#use_parallelism}

---

###### `use_serverless_analytics`<sup>Optional</sup> <a name="use_serverless_analytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSpanner.parameter.useServerlessAnalytics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the serverless analytics service should be used to read data from Cloud Spanner.

'useParallelism' must be set when using serverless analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#use_serverless_analytics BigqueryConnection#use_serverless_analytics}

---

##### `put_cloud_sql` <a name="put_cloud_sql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql"></a>

```python
def put_cloud_sql(
  credential: BigqueryConnectionCloudSqlCredential,
  database: str,
  instance_id: str,
  type: str
) -> None
```

###### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql.parameter.credential"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#credential BigqueryConnection#credential}

---

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql.parameter.database"></a>

- *Type:* str

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#database BigqueryConnection#database}

---

###### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql.parameter.instanceId"></a>

- *Type:* str

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#instance_id BigqueryConnection#instance_id}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putCloudSql.parameter.type"></a>

- *Type:* str

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#type BigqueryConnection#type}

---

##### `put_spark` <a name="put_spark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putSpark"></a>

```python
def put_spark(
  metastore_service_config: BigqueryConnectionSparkMetastoreServiceConfig = None,
  spark_history_server_config: BigqueryConnectionSparkSparkHistoryServerConfig = None
) -> None
```

###### `metastore_service_config`<sup>Optional</sup> <a name="metastore_service_config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putSpark.parameter.metastoreServiceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

metastore_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#metastore_service_config BigqueryConnection#metastore_service_config}

---

###### `spark_history_server_config`<sup>Optional</sup> <a name="spark_history_server_config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putSpark.parameter.sparkHistoryServerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#spark_history_server_config BigqueryConnection#spark_history_server_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#create BigqueryConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#delete BigqueryConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#update BigqueryConnection#update}.

---

##### `reset_aws` <a name="reset_aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAws"></a>

```python
def reset_aws() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_cloud_resource` <a name="reset_cloud_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudResource"></a>

```python
def reset_cloud_resource() -> None
```

##### `reset_cloud_spanner` <a name="reset_cloud_spanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSpanner"></a>

```python
def reset_cloud_spanner() -> None
```

##### `reset_cloud_sql` <a name="reset_cloud_sql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetCloudSql"></a>

```python
def reset_cloud_sql() -> None
```

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_spark` <a name="reset_spark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetSpark"></a>

```python
def reset_spark() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigqueryConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigqueryConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference">BigqueryConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference">BigqueryConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResource">cloud_resource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference">BigqueryConnectionCloudResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpanner">cloud_spanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference">BigqueryConnectionCloudSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSql">cloud_sql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference">BigqueryConnectionCloudSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.hasCredential">has_credential</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference">BigqueryConnectionSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference">BigqueryConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.awsInput">aws_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azureInput">azure_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResourceInput">cloud_resource_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpannerInput">cloud_spanner_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSqlInput">cloud_sql_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.sparkInput">spark_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.aws"></a>

```python
aws: BigqueryConnectionAwsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference">BigqueryConnectionAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azure"></a>

```python
azure: BigqueryConnectionAzureOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference">BigqueryConnectionAzureOutputReference</a>

---

##### `cloud_resource`<sup>Required</sup> <a name="cloud_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResource"></a>

```python
cloud_resource: BigqueryConnectionCloudResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference">BigqueryConnectionCloudResourceOutputReference</a>

---

##### `cloud_spanner`<sup>Required</sup> <a name="cloud_spanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpanner"></a>

```python
cloud_spanner: BigqueryConnectionCloudSpannerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference">BigqueryConnectionCloudSpannerOutputReference</a>

---

##### `cloud_sql`<sup>Required</sup> <a name="cloud_sql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSql"></a>

```python
cloud_sql: BigqueryConnectionCloudSqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference">BigqueryConnectionCloudSqlOutputReference</a>

---

##### `has_credential`<sup>Required</sup> <a name="has_credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.hasCredential"></a>

```python
has_credential: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.spark"></a>

```python
spark: BigqueryConnectionSparkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference">BigqueryConnectionSparkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeouts"></a>

```python
timeouts: BigqueryConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference">BigqueryConnectionTimeoutsOutputReference</a>

---

##### `aws_input`<sup>Optional</sup> <a name="aws_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.awsInput"></a>

```python
aws_input: BigqueryConnectionAws
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.azureInput"></a>

```python
azure_input: BigqueryConnectionAzure
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---

##### `cloud_resource_input`<sup>Optional</sup> <a name="cloud_resource_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudResourceInput"></a>

```python
cloud_resource_input: BigqueryConnectionCloudResource
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---

##### `cloud_spanner_input`<sup>Optional</sup> <a name="cloud_spanner_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSpannerInput"></a>

```python
cloud_spanner_input: BigqueryConnectionCloudSpanner
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---

##### `cloud_sql_input`<sup>Optional</sup> <a name="cloud_sql_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.cloudSqlInput"></a>

```python
cloud_sql_input: BigqueryConnectionCloudSql
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `spark_input`<sup>Optional</sup> <a name="spark_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.sparkInput"></a>

```python
spark_input: BigqueryConnectionSpark
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BigqueryConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>]

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryConnectionAws <a name="BigqueryConnectionAws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionAws(
  access_role: BigqueryConnectionAwsAccessRole
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.property.accessRole">access_role</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | access_role block. |

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws.property.accessRole"></a>

```python
access_role: BigqueryConnectionAwsAccessRole
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#access_role BigqueryConnection#access_role}

---

### BigqueryConnectionAwsAccessRole <a name="BigqueryConnectionAwsAccessRole" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionAwsAccessRole(
  iam_role_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.property.iamRoleId">iam_role_id</a></code> | <code>str</code> | The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. |

---

##### `iam_role_id`<sup>Required</sup> <a name="iam_role_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole.property.iamRoleId"></a>

```python
iam_role_id: str
```

- *Type:* str

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#iam_role_id BigqueryConnection#iam_role_id}

---

### BigqueryConnectionAzure <a name="BigqueryConnectionAzure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionAzure(
  customer_tenant_id: str,
  federated_application_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.customerTenantId">customer_tenant_id</a></code> | <code>str</code> | The id of customer's directory that host the data. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.federatedApplicationClientId">federated_application_client_id</a></code> | <code>str</code> | The Azure Application (client) ID where the federated credentials will be hosted. |

---

##### `customer_tenant_id`<sup>Required</sup> <a name="customer_tenant_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.customerTenantId"></a>

```python
customer_tenant_id: str
```

- *Type:* str

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#customer_tenant_id BigqueryConnection#customer_tenant_id}

---

##### `federated_application_client_id`<sup>Optional</sup> <a name="federated_application_client_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure.property.federatedApplicationClientId"></a>

```python
federated_application_client_id: str
```

- *Type:* str

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#federated_application_client_id BigqueryConnection#federated_application_client_id}

---

### BigqueryConnectionCloudResource <a name="BigqueryConnectionCloudResource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionCloudResource()
```


### BigqueryConnectionCloudSpanner <a name="BigqueryConnectionCloudSpanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionCloudSpanner(
  database: str,
  database_role: str = None,
  max_parallelism: typing.Union[int, float] = None,
  use_data_boost: typing.Union[bool, IResolvable] = None,
  use_parallelism: typing.Union[bool, IResolvable] = None,
  use_serverless_analytics: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.database">database</a></code> | <code>str</code> | Cloud Spanner database in the form 'project/instance/database'. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.databaseRole">database_role</a></code> | <code>str</code> | Cloud Spanner database role for fine-grained access control. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.maxParallelism">max_parallelism</a></code> | <code>typing.Union[int, float]</code> | Allows setting max parallelism per query when executing on Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useDataBoost">use_data_boost</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the request will be executed via Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useParallelism">use_parallelism</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If parallelism should be used when reading from Cloud Spanner. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useServerlessAnalytics">use_serverless_analytics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the serverless analytics service should be used to read data from Cloud Spanner. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.database"></a>

```python
database: str
```

- *Type:* str

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#database BigqueryConnection#database}

---

##### `database_role`<sup>Optional</sup> <a name="database_role" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.databaseRole"></a>

```python
database_role: str
```

- *Type:* str

Cloud Spanner database role for fine-grained access control.

The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#database_role BigqueryConnection#database_role}

---

##### `max_parallelism`<sup>Optional</sup> <a name="max_parallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.maxParallelism"></a>

```python
max_parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Allows setting max parallelism per query when executing on Spanner independent compute resources.

If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#max_parallelism BigqueryConnection#max_parallelism}

---

##### `use_data_boost`<sup>Optional</sup> <a name="use_data_boost" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useDataBoost"></a>

```python
use_data_boost: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the request will be executed via Spanner independent compute resources.

'use_parallelism' must be set when using data boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#use_data_boost BigqueryConnection#use_data_boost}

---

##### `use_parallelism`<sup>Optional</sup> <a name="use_parallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useParallelism"></a>

```python
use_parallelism: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#use_parallelism BigqueryConnection#use_parallelism}

---

##### `use_serverless_analytics`<sup>Optional</sup> <a name="use_serverless_analytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner.property.useServerlessAnalytics"></a>

```python
use_serverless_analytics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the serverless analytics service should be used to read data from Cloud Spanner.

'useParallelism' must be set when using serverless analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#use_serverless_analytics BigqueryConnection#use_serverless_analytics}

---

### BigqueryConnectionCloudSql <a name="BigqueryConnectionCloudSql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionCloudSql(
  credential: BigqueryConnectionCloudSqlCredential,
  database: str,
  instance_id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | credential block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.database">database</a></code> | <code>str</code> | Database name. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.instanceId">instance_id</a></code> | <code>str</code> | Cloud SQL instance ID in the form project:location:instance. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.type">type</a></code> | <code>str</code> | Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.credential"></a>

```python
credential: BigqueryConnectionCloudSqlCredential
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#credential BigqueryConnection#credential}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.database"></a>

```python
database: str
```

- *Type:* str

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#database BigqueryConnection#database}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#instance_id BigqueryConnection#instance_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#type BigqueryConnection#type}

---

### BigqueryConnectionCloudSqlCredential <a name="BigqueryConnectionCloudSqlCredential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionCloudSqlCredential(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.password">password</a></code> | <code>str</code> | Password for database. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.username">username</a></code> | <code>str</code> | Username for database. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.password"></a>

```python
password: str
```

- *Type:* str

Password for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#password BigqueryConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential.property.username"></a>

```python
username: str
```

- *Type:* str

Username for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#username BigqueryConnection#username}

---

### BigqueryConnectionConfig <a name="BigqueryConnectionConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws: BigqueryConnectionAws = None,
  azure: BigqueryConnectionAzure = None,
  cloud_resource: BigqueryConnectionCloudResource = None,
  cloud_spanner: BigqueryConnectionCloudSpanner = None,
  cloud_sql: BigqueryConnectionCloudSql = None,
  connection_id: str = None,
  description: str = None,
  friendly_name: str = None,
  id: str = None,
  kms_key_name: str = None,
  location: str = None,
  project: str = None,
  spark: BigqueryConnectionSpark = None,
  timeouts: BigqueryConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudResource">cloud_resource</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSpanner">cloud_spanner</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSql">cloud_sql</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.description">description</a></code> | <code>str</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#id BigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Optional. The Cloud KMS key that is used for encryption. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#project BigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.aws"></a>

```python
aws: BigqueryConnectionAws
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#aws BigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.azure"></a>

```python
azure: BigqueryConnectionAzure
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#azure BigqueryConnection#azure}

---

##### `cloud_resource`<sup>Optional</sup> <a name="cloud_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudResource"></a>

```python
cloud_resource: BigqueryConnectionCloudResource
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#cloud_resource BigqueryConnection#cloud_resource}

---

##### `cloud_spanner`<sup>Optional</sup> <a name="cloud_spanner" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSpanner"></a>

```python
cloud_spanner: BigqueryConnectionCloudSpanner
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#cloud_spanner BigqueryConnection#cloud_spanner}

---

##### `cloud_sql`<sup>Optional</sup> <a name="cloud_sql" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.cloudSql"></a>

```python
cloud_sql: BigqueryConnectionCloudSql
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#cloud_sql BigqueryConnection#cloud_sql}

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#connection_id BigqueryConnection#connection_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#description BigqueryConnection#description}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#friendly_name BigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#id BigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Optional. The Cloud KMS key that is used for encryption.

Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#kms_key_name BigqueryConnection#kms_key_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#location BigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#project BigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.spark"></a>

```python
spark: BigqueryConnectionSpark
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#spark BigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionConfig.property.timeouts"></a>

```python
timeouts: BigqueryConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#timeouts BigqueryConnection#timeouts}

---

### BigqueryConnectionSpark <a name="BigqueryConnectionSpark" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionSpark(
  metastore_service_config: BigqueryConnectionSparkMetastoreServiceConfig = None,
  spark_history_server_config: BigqueryConnectionSparkSparkHistoryServerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.metastoreServiceConfig">metastore_service_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a></code> | metastore_service_config block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.sparkHistoryServerConfig">spark_history_server_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastore_service_config`<sup>Optional</sup> <a name="metastore_service_config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.metastoreServiceConfig"></a>

```python
metastore_service_config: BigqueryConnectionSparkMetastoreServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

metastore_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#metastore_service_config BigqueryConnection#metastore_service_config}

---

##### `spark_history_server_config`<sup>Optional</sup> <a name="spark_history_server_config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark.property.sparkHistoryServerConfig"></a>

```python
spark_history_server_config: BigqueryConnectionSparkSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#spark_history_server_config BigqueryConnection#spark_history_server_config}

---

### BigqueryConnectionSparkMetastoreServiceConfig <a name="BigqueryConnectionSparkMetastoreServiceConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig(
  metastore_service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService">metastore_service</a></code> | <code>str</code> | Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId]. |

---

##### `metastore_service`<sup>Optional</sup> <a name="metastore_service" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService"></a>

```python
metastore_service: str
```

- *Type:* str

Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#metastore_service BigqueryConnection#metastore_service}

---

### BigqueryConnectionSparkSparkHistoryServerConfig <a name="BigqueryConnectionSparkSparkHistoryServerConfig" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig(
  dataproc_cluster: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster">dataproc_cluster</a></code> | <code>str</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name]. |

---

##### `dataproc_cluster`<sup>Optional</sup> <a name="dataproc_cluster" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster"></a>

```python
dataproc_cluster: str
```

- *Type:* str

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#dataproc_cluster BigqueryConnection#dataproc_cluster}

---

### BigqueryConnectionTimeouts <a name="BigqueryConnectionTimeouts" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#create BigqueryConnection#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#delete BigqueryConnection#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#update BigqueryConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#create BigqueryConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#delete BigqueryConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#update BigqueryConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryConnectionAwsAccessRoleOutputReference <a name="BigqueryConnectionAwsAccessRoleOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput">iam_role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId">iam_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `iam_role_id_input`<sup>Optional</sup> <a name="iam_role_id_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput"></a>

```python
iam_role_id_input: str
```

- *Type:* str

---

##### `iam_role_id`<sup>Required</sup> <a name="iam_role_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId"></a>

```python
iam_role_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryConnectionAwsAccessRole
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---


### BigqueryConnectionAwsOutputReference <a name="BigqueryConnectionAwsOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole">put_access_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_role` <a name="put_access_role" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole"></a>

```python
def put_access_role(
  iam_role_id: str
) -> None
```

###### `iam_role_id`<sup>Required</sup> <a name="iam_role_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.putAccessRole.parameter.iamRoleId"></a>

- *Type:* str

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#iam_role_id BigqueryConnection#iam_role_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRole">access_role</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference">BigqueryConnectionAwsAccessRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRoleInput">access_role_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRole"></a>

```python
access_role: BigqueryConnectionAwsAccessRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRoleOutputReference">BigqueryConnectionAwsAccessRoleOutputReference</a>

---

##### `access_role_input`<sup>Optional</sup> <a name="access_role_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.accessRoleInput"></a>

```python
access_role_input: BigqueryConnectionAwsAccessRole
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsAccessRole">BigqueryConnectionAwsAccessRole</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAwsOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryConnectionAws
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAws">BigqueryConnectionAws</a>

---


### BigqueryConnectionAzureOutputReference <a name="BigqueryConnectionAzureOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId">reset_federated_application_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_federated_application_client_id` <a name="reset_federated_application_client_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId"></a>

```python
def reset_federated_application_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.redirectUri">redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantIdInput">customer_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput">federated_application_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantId">customer_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientId">federated_application_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

---

##### `customer_tenant_id_input`<sup>Optional</sup> <a name="customer_tenant_id_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantIdInput"></a>

```python
customer_tenant_id_input: str
```

- *Type:* str

---

##### `federated_application_client_id_input`<sup>Optional</sup> <a name="federated_application_client_id_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput"></a>

```python
federated_application_client_id_input: str
```

- *Type:* str

---

##### `customer_tenant_id`<sup>Required</sup> <a name="customer_tenant_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.customerTenantId"></a>

```python
customer_tenant_id: str
```

- *Type:* str

---

##### `federated_application_client_id`<sup>Required</sup> <a name="federated_application_client_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.federatedApplicationClientId"></a>

```python
federated_application_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzureOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryConnectionAzure
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionAzure">BigqueryConnectionAzure</a>

---


### BigqueryConnectionCloudResourceOutputReference <a name="BigqueryConnectionCloudResourceOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionCloudResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResourceOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryConnectionCloudResource
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudResource">BigqueryConnectionCloudResource</a>

---


### BigqueryConnectionCloudSpannerOutputReference <a name="BigqueryConnectionCloudSpannerOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole">reset_database_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism">reset_max_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost">reset_use_data_boost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseParallelism">reset_use_parallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics">reset_use_serverless_analytics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database_role` <a name="reset_database_role" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole"></a>

```python
def reset_database_role() -> None
```

##### `reset_max_parallelism` <a name="reset_max_parallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism"></a>

```python
def reset_max_parallelism() -> None
```

##### `reset_use_data_boost` <a name="reset_use_data_boost" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost"></a>

```python
def reset_use_data_boost() -> None
```

##### `reset_use_parallelism` <a name="reset_use_parallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseParallelism"></a>

```python
def reset_use_parallelism() -> None
```

##### `reset_use_serverless_analytics` <a name="reset_use_serverless_analytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics"></a>

```python
def reset_use_serverless_analytics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput">database_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput">max_parallelism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput">use_data_boost_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput">use_parallelism_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput">use_serverless_analytics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRole">database_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelism">max_parallelism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoost">use_data_boost</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelism">use_parallelism</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics">use_serverless_analytics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `database_role_input`<sup>Optional</sup> <a name="database_role_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput"></a>

```python
database_role_input: str
```

- *Type:* str

---

##### `max_parallelism_input`<sup>Optional</sup> <a name="max_parallelism_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput"></a>

```python
max_parallelism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_data_boost_input`<sup>Optional</sup> <a name="use_data_boost_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput"></a>

```python
use_data_boost_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_parallelism_input`<sup>Optional</sup> <a name="use_parallelism_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput"></a>

```python
use_parallelism_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_serverless_analytics_input`<sup>Optional</sup> <a name="use_serverless_analytics_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput"></a>

```python
use_serverless_analytics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `database_role`<sup>Required</sup> <a name="database_role" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.databaseRole"></a>

```python
database_role: str
```

- *Type:* str

---

##### `max_parallelism`<sup>Required</sup> <a name="max_parallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.maxParallelism"></a>

```python
max_parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_data_boost`<sup>Required</sup> <a name="use_data_boost" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useDataBoost"></a>

```python
use_data_boost: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_parallelism`<sup>Required</sup> <a name="use_parallelism" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useParallelism"></a>

```python
use_parallelism: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_serverless_analytics`<sup>Required</sup> <a name="use_serverless_analytics" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics"></a>

```python
use_serverless_analytics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpannerOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryConnectionCloudSpanner
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSpanner">BigqueryConnectionCloudSpanner</a>

---


### BigqueryConnectionCloudSqlCredentialOutputReference <a name="BigqueryConnectionCloudSqlCredentialOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryConnectionCloudSqlCredential
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---


### BigqueryConnectionCloudSqlOutputReference <a name="BigqueryConnectionCloudSqlOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionCloudSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential">put_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_credential` <a name="put_credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential"></a>

```python
def put_credential(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential.parameter.password"></a>

- *Type:* str

Password for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#password BigqueryConnection#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.putCredential.parameter.username"></a>

- *Type:* str

Username for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#username BigqueryConnection#username}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference">BigqueryConnectionCloudSqlCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credentialInput">credential_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credential"></a>

```python
credential: BigqueryConnectionCloudSqlCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredentialOutputReference">BigqueryConnectionCloudSqlCredentialOutputReference</a>

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

##### `credential_input`<sup>Optional</sup> <a name="credential_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.credentialInput"></a>

```python
credential_input: BigqueryConnectionCloudSqlCredential
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlCredential">BigqueryConnectionCloudSqlCredential</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSqlOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryConnectionCloudSql
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionCloudSql">BigqueryConnectionCloudSql</a>

---


### BigqueryConnectionSparkMetastoreServiceConfigOutputReference <a name="BigqueryConnectionSparkMetastoreServiceConfigOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService">reset_metastore_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metastore_service` <a name="reset_metastore_service" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService"></a>

```python
def reset_metastore_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput">metastore_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService">metastore_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metastore_service_input`<sup>Optional</sup> <a name="metastore_service_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput"></a>

```python
metastore_service_input: str
```

- *Type:* str

---

##### `metastore_service`<sup>Required</sup> <a name="metastore_service" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService"></a>

```python
metastore_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryConnectionSparkMetastoreServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

---


### BigqueryConnectionSparkOutputReference <a name="BigqueryConnectionSparkOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionSparkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putMetastoreServiceConfig">put_metastore_service_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig">put_spark_history_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig">reset_metastore_service_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig">reset_spark_history_server_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metastore_service_config` <a name="put_metastore_service_config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putMetastoreServiceConfig"></a>

```python
def put_metastore_service_config(
  metastore_service: str = None
) -> None
```

###### `metastore_service`<sup>Optional</sup> <a name="metastore_service" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putMetastoreServiceConfig.parameter.metastoreService"></a>

- *Type:* str

Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#metastore_service BigqueryConnection#metastore_service}

---

##### `put_spark_history_server_config` <a name="put_spark_history_server_config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig"></a>

```python
def put_spark_history_server_config(
  dataproc_cluster: str = None
) -> None
```

###### `dataproc_cluster`<sup>Optional</sup> <a name="dataproc_cluster" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig.parameter.dataprocCluster"></a>

- *Type:* str

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/bigquery_connection#dataproc_cluster BigqueryConnection#dataproc_cluster}

---

##### `reset_metastore_service_config` <a name="reset_metastore_service_config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig"></a>

```python
def reset_metastore_service_config() -> None
```

##### `reset_spark_history_server_config` <a name="reset_spark_history_server_config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig"></a>

```python
def reset_spark_history_server_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfig">metastore_service_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference">BigqueryConnectionSparkMetastoreServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig">spark_history_server_config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference">BigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput">metastore_service_config_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput">spark_history_server_config_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metastore_service_config`<sup>Required</sup> <a name="metastore_service_config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfig"></a>

```python
metastore_service_config: BigqueryConnectionSparkMetastoreServiceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfigOutputReference">BigqueryConnectionSparkMetastoreServiceConfigOutputReference</a>

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

##### `spark_history_server_config`<sup>Required</sup> <a name="spark_history_server_config" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig"></a>

```python
spark_history_server_config: BigqueryConnectionSparkSparkHistoryServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference">BigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a>

---

##### `metastore_service_config_input`<sup>Optional</sup> <a name="metastore_service_config_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput"></a>

```python
metastore_service_config_input: BigqueryConnectionSparkMetastoreServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkMetastoreServiceConfig">BigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `spark_history_server_config_input`<sup>Optional</sup> <a name="spark_history_server_config_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput"></a>

```python
spark_history_server_config_input: BigqueryConnectionSparkSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryConnectionSpark
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSpark">BigqueryConnectionSpark</a>

---


### BigqueryConnectionSparkSparkHistoryServerConfigOutputReference <a name="BigqueryConnectionSparkSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster">reset_dataproc_cluster</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataproc_cluster` <a name="reset_dataproc_cluster" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```python
def reset_dataproc_cluster() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataproc_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataproc_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataproc_cluster_input`<sup>Optional</sup> <a name="dataproc_cluster_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```python
dataproc_cluster_input: str
```

- *Type:* str

---

##### `dataproc_cluster`<sup>Required</sup> <a name="dataproc_cluster" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```python
dataproc_cluster: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryConnectionSparkSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionSparkSparkHistoryServerConfig">BigqueryConnectionSparkSparkHistoryServerConfig</a>

---


### BigqueryConnectionTimeoutsOutputReference <a name="BigqueryConnectionTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_connection

bigqueryConnection.BigqueryConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigqueryConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigqueryConnection.BigqueryConnectionTimeouts">BigqueryConnectionTimeouts</a>]

---



