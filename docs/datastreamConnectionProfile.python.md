# `datastreamConnectionProfile` Submodule <a name="`datastreamConnectionProfile` Submodule" id="@cdktf/provider-google.datastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastreamConnectionProfile <a name="DatastreamConnectionProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_profile_id: str,
  display_name: str,
  location: str,
  bigquery_profile: DatastreamConnectionProfileBigqueryProfile = None,
  forward_ssh_connectivity: DatastreamConnectionProfileForwardSshConnectivity = None,
  gcs_profile: DatastreamConnectionProfileGcsProfile = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mysql_profile: DatastreamConnectionProfileMysqlProfile = None,
  oracle_profile: DatastreamConnectionProfileOracleProfile = None,
  postgresql_profile: DatastreamConnectionProfilePostgresqlProfile = None,
  private_connectivity: DatastreamConnectionProfilePrivateConnectivity = None,
  project: str = None,
  timeouts: DatastreamConnectionProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | The connection profile identifier. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.bigqueryProfile">bigquery_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.forwardSshConnectivity">forward_ssh_connectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.gcsProfile">gcs_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.mysqlProfile">mysql_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.oracleProfile">oracle_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.postgresqlProfile">postgresql_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.privateConnectivity">private_connectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.connectionProfileId"></a>

- *Type:* str

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#connection_profile_id DatastreamConnectionProfile#connection_profile_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.displayName"></a>

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#display_name DatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#location DatastreamConnectionProfile#location}

---

##### `bigquery_profile`<sup>Optional</sup> <a name="bigquery_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.bigqueryProfile"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#bigquery_profile DatastreamConnectionProfile#bigquery_profile}

---

##### `forward_ssh_connectivity`<sup>Optional</sup> <a name="forward_ssh_connectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.forwardSshConnectivity"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#forward_ssh_connectivity DatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcs_profile`<sup>Optional</sup> <a name="gcs_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.gcsProfile"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#gcs_profile DatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#labels DatastreamConnectionProfile#labels}

---

##### `mysql_profile`<sup>Optional</sup> <a name="mysql_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.mysqlProfile"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#mysql_profile DatastreamConnectionProfile#mysql_profile}

---

##### `oracle_profile`<sup>Optional</sup> <a name="oracle_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.oracleProfile"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#oracle_profile DatastreamConnectionProfile#oracle_profile}

---

##### `postgresql_profile`<sup>Optional</sup> <a name="postgresql_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.postgresqlProfile"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#postgresql_profile DatastreamConnectionProfile#postgresql_profile}

---

##### `private_connectivity`<sup>Optional</sup> <a name="private_connectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.privateConnectivity"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#private_connectivity DatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#timeouts DatastreamConnectionProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile">put_bigquery_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity">put_forward_ssh_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile">put_gcs_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile">put_mysql_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile">put_oracle_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile">put_postgresql_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity">put_private_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile">reset_bigquery_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity">reset_forward_ssh_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile">reset_gcs_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile">reset_mysql_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile">reset_oracle_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile">reset_postgresql_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity">reset_private_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bigquery_profile` <a name="put_bigquery_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile"></a>

```python
def put_bigquery_profile() -> None
```

##### `put_forward_ssh_connectivity` <a name="put_forward_ssh_connectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity"></a>

```python
def put_forward_ssh_connectivity(
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  private_key: str = None
) -> None
```

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity.parameter.hostname"></a>

- *Type:* str

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity.parameter.username"></a>

- *Type:* str

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity.parameter.password"></a>

- *Type:* str

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

###### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity.parameter.privateKey"></a>

- *Type:* str

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#private_key DatastreamConnectionProfile#private_key}

---

##### `put_gcs_profile` <a name="put_gcs_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile"></a>

```python
def put_gcs_profile(
  bucket: str,
  root_path: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile.parameter.bucket"></a>

- *Type:* str

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#bucket DatastreamConnectionProfile#bucket}

---

###### `root_path`<sup>Optional</sup> <a name="root_path" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile.parameter.rootPath"></a>

- *Type:* str

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#root_path DatastreamConnectionProfile#root_path}

---

##### `put_mysql_profile` <a name="put_mysql_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile"></a>

```python
def put_mysql_profile(
  hostname: str,
  password: str,
  username: str,
  port: typing.Union[int, float] = None,
  ssl_config: DatastreamConnectionProfileMysqlProfileSslConfig = None
) -> None
```

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile.parameter.hostname"></a>

- *Type:* str

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile.parameter.password"></a>

- *Type:* str

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile.parameter.username"></a>

- *Type:* str

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

###### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile.parameter.sslConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

##### `put_oracle_profile` <a name="put_oracle_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile"></a>

```python
def put_oracle_profile(
  database_service: str,
  hostname: str,
  password: str,
  username: str,
  connection_attributes: typing.Mapping[str] = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `database_service`<sup>Required</sup> <a name="database_service" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.databaseService"></a>

- *Type:* str

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#database_service DatastreamConnectionProfile#database_service}

---

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.hostname"></a>

- *Type:* str

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.password"></a>

- *Type:* str

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.username"></a>

- *Type:* str

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

###### `connection_attributes`<sup>Optional</sup> <a name="connection_attributes" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.connectionAttributes"></a>

- *Type:* typing.Mapping[str]

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#connection_attributes DatastreamConnectionProfile#connection_attributes}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `put_postgresql_profile` <a name="put_postgresql_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile"></a>

```python
def put_postgresql_profile(
  database: str,
  hostname: str,
  password: str,
  username: str,
  port: typing.Union[int, float] = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile.parameter.database"></a>

- *Type:* str

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}

---

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile.parameter.hostname"></a>

- *Type:* str

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile.parameter.password"></a>

- *Type:* str

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile.parameter.username"></a>

- *Type:* str

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `put_private_connectivity` <a name="put_private_connectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity"></a>

```python
def put_private_connectivity(
  private_connection: str
) -> None
```

###### `private_connection`<sup>Required</sup> <a name="private_connection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity.parameter.privateConnection"></a>

- *Type:* str

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#private_connection DatastreamConnectionProfile#private_connection}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}.

---

##### `reset_bigquery_profile` <a name="reset_bigquery_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile"></a>

```python
def reset_bigquery_profile() -> None
```

##### `reset_forward_ssh_connectivity` <a name="reset_forward_ssh_connectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```python
def reset_forward_ssh_connectivity() -> None
```

##### `reset_gcs_profile` <a name="reset_gcs_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile"></a>

```python
def reset_gcs_profile() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mysql_profile` <a name="reset_mysql_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile"></a>

```python
def reset_mysql_profile() -> None
```

##### `reset_oracle_profile` <a name="reset_oracle_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile"></a>

```python
def reset_oracle_profile() -> None
```

##### `reset_postgresql_profile` <a name="reset_postgresql_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile"></a>

```python
def reset_postgresql_profile() -> None
```

##### `reset_private_connectivity` <a name="reset_private_connectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity"></a>

```python
def reset_private_connectivity() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatastreamConnectionProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatastreamConnectionProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatastreamConnectionProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatastreamConnectionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatastreamConnectionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile">bigquery_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity">forward_ssh_connectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile">gcs_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile">mysql_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile">oracle_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile">postgresql_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity">private_connectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput">bigquery_profile_input</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput">connection_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput">forward_ssh_connectivity_input</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput">gcs_profile_input</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput">mysql_profile_input</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput">oracle_profile_input</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput">postgresql_profile_input</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput">private_connectivity_input</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigquery_profile`<sup>Required</sup> <a name="bigquery_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile"></a>

```python
bigquery_profile: DatastreamConnectionProfileBigqueryProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `forward_ssh_connectivity`<sup>Required</sup> <a name="forward_ssh_connectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```python
forward_ssh_connectivity: DatastreamConnectionProfileForwardSshConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `gcs_profile`<sup>Required</sup> <a name="gcs_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile"></a>

```python
gcs_profile: DatastreamConnectionProfileGcsProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `mysql_profile`<sup>Required</sup> <a name="mysql_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile"></a>

```python
mysql_profile: DatastreamConnectionProfileMysqlProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oracle_profile`<sup>Required</sup> <a name="oracle_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile"></a>

```python
oracle_profile: DatastreamConnectionProfileOracleProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `postgresql_profile`<sup>Required</sup> <a name="postgresql_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile"></a>

```python
postgresql_profile: DatastreamConnectionProfilePostgresqlProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `private_connectivity`<sup>Required</sup> <a name="private_connectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity"></a>

```python
private_connectivity: DatastreamConnectionProfilePrivateConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts"></a>

```python
timeouts: DatastreamConnectionProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `bigquery_profile_input`<sup>Optional</sup> <a name="bigquery_profile_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```python
bigquery_profile_input: DatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `connection_profile_id_input`<sup>Optional</sup> <a name="connection_profile_id_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```python
connection_profile_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `forward_ssh_connectivity_input`<sup>Optional</sup> <a name="forward_ssh_connectivity_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```python
forward_ssh_connectivity_input: DatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `gcs_profile_input`<sup>Optional</sup> <a name="gcs_profile_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput"></a>

```python
gcs_profile_input: DatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mysql_profile_input`<sup>Optional</sup> <a name="mysql_profile_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput"></a>

```python
mysql_profile_input: DatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `oracle_profile_input`<sup>Optional</sup> <a name="oracle_profile_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput"></a>

```python
oracle_profile_input: DatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `postgresql_profile_input`<sup>Optional</sup> <a name="postgresql_profile_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```python
postgresql_profile_input: DatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `private_connectivity_input`<sup>Optional</sup> <a name="private_connectivity_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput"></a>

```python
private_connectivity_input: DatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatastreamConnectionProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId"></a>

```python
connection_profile_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatastreamConnectionProfileBigqueryProfile <a name="DatastreamConnectionProfileBigqueryProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile()
```


### DatastreamConnectionProfileConfig <a name="DatastreamConnectionProfileConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_profile_id: str,
  display_name: str,
  location: str,
  bigquery_profile: DatastreamConnectionProfileBigqueryProfile = None,
  forward_ssh_connectivity: DatastreamConnectionProfileForwardSshConnectivity = None,
  gcs_profile: DatastreamConnectionProfileGcsProfile = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mysql_profile: DatastreamConnectionProfileMysqlProfile = None,
  oracle_profile: DatastreamConnectionProfileOracleProfile = None,
  postgresql_profile: DatastreamConnectionProfilePostgresqlProfile = None,
  private_connectivity: DatastreamConnectionProfilePrivateConnectivity = None,
  project: str = None,
  timeouts: DatastreamConnectionProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | The connection profile identifier. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location">location</a></code> | <code>str</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile">bigquery_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity">forward_ssh_connectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile">gcs_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile">mysql_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile">oracle_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile">postgresql_profile</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity">private_connectivity</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```python
connection_profile_id: str
```

- *Type:* str

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#connection_profile_id DatastreamConnectionProfile#connection_profile_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#display_name DatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#location DatastreamConnectionProfile#location}

---

##### `bigquery_profile`<sup>Optional</sup> <a name="bigquery_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```python
bigquery_profile: DatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#bigquery_profile DatastreamConnectionProfile#bigquery_profile}

---

##### `forward_ssh_connectivity`<sup>Optional</sup> <a name="forward_ssh_connectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```python
forward_ssh_connectivity: DatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#forward_ssh_connectivity DatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcs_profile`<sup>Optional</sup> <a name="gcs_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile"></a>

```python
gcs_profile: DatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#gcs_profile DatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#labels DatastreamConnectionProfile#labels}

---

##### `mysql_profile`<sup>Optional</sup> <a name="mysql_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```python
mysql_profile: DatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#mysql_profile DatastreamConnectionProfile#mysql_profile}

---

##### `oracle_profile`<sup>Optional</sup> <a name="oracle_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile"></a>

```python
oracle_profile: DatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#oracle_profile DatastreamConnectionProfile#oracle_profile}

---

##### `postgresql_profile`<sup>Optional</sup> <a name="postgresql_profile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```python
postgresql_profile: DatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#postgresql_profile DatastreamConnectionProfile#postgresql_profile}

---

##### `private_connectivity`<sup>Optional</sup> <a name="private_connectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```python
private_connectivity: DatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#private_connectivity DatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts"></a>

```python
timeouts: DatastreamConnectionProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#timeouts DatastreamConnectionProfile#timeouts}

---

### DatastreamConnectionProfileForwardSshConnectivity <a name="DatastreamConnectionProfileForwardSshConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity(
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  private_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username">username</a></code> | <code>str</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password">password</a></code> | <code>str</code> | SSH password. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey">private_key</a></code> | <code>str</code> | SSH private key. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```python
password: str
```

- *Type:* str

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#private_key DatastreamConnectionProfile#private_key}

---

### DatastreamConnectionProfileGcsProfile <a name="DatastreamConnectionProfileGcsProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile(
  bucket: str,
  root_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket">bucket</a></code> | <code>str</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath">root_path</a></code> | <code>str</code> | The root path inside the Cloud Storage bucket. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#bucket DatastreamConnectionProfile#bucket}

---

##### `root_path`<sup>Optional</sup> <a name="root_path" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```python
root_path: str
```

- *Type:* str

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#root_path DatastreamConnectionProfile#root_path}

---

### DatastreamConnectionProfileMysqlProfile <a name="DatastreamConnectionProfileMysqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile(
  hostname: str,
  password: str,
  username: str,
  port: typing.Union[int, float] = None,
  ssl_config: DatastreamConnectionProfileMysqlProfileSslConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password">password</a></code> | <code>str</code> | Password for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username">username</a></code> | <code>str</code> | Username for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the MySQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```python
ssl_config: DatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

### DatastreamConnectionProfileMysqlProfileSslConfig <a name="DatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig(
  ca_certificate: str = None,
  client_certificate: str = None,
  client_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">ca_certificate</a></code> | <code>str</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">client_key</a></code> | <code>str</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

### DatastreamConnectionProfileOracleProfile <a name="DatastreamConnectionProfileOracleProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile(
  database_service: str,
  hostname: str,
  password: str,
  username: str,
  connection_attributes: typing.Mapping[str] = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService">database_service</a></code> | <code>str</code> | Database for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password">password</a></code> | <code>str</code> | Password for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username">username</a></code> | <code>str</code> | Username for the Oracle connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes">connection_attributes</a></code> | <code>typing.Mapping[str]</code> | Connection string attributes. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the Oracle connection. |

---

##### `database_service`<sup>Required</sup> <a name="database_service" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```python
database_service: str
```

- *Type:* str

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#database_service DatastreamConnectionProfile#database_service}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `connection_attributes`<sup>Optional</sup> <a name="connection_attributes" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```python
connection_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#connection_attributes DatastreamConnectionProfile#connection_attributes}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

### DatastreamConnectionProfilePostgresqlProfile <a name="DatastreamConnectionProfilePostgresqlProfile" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile(
  database: str,
  hostname: str,
  password: str,
  username: str,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database">database</a></code> | <code>str</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password">password</a></code> | <code>str</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username">username</a></code> | <code>str</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the PostgreSQL connection. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```python
database: str
```

- *Type:* str

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

### DatastreamConnectionProfilePrivateConnectivity <a name="DatastreamConnectionProfilePrivateConnectivity" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity(
  private_connection: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection">private_connection</a></code> | <code>str</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `private_connection`<sup>Required</sup> <a name="private_connection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```python
private_connection: str
```

- *Type:* str

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#private_connection DatastreamConnectionProfile#private_connection}

---

### DatastreamConnectionProfileTimeouts <a name="DatastreamConnectionProfileTimeouts" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatastreamConnectionProfileBigqueryProfileOutputReference <a name="DatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```python
internal_value: DatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---


### DatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="DatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">reset_private_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```python
internal_value: DatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---


### DatastreamConnectionProfileGcsProfileOutputReference <a name="DatastreamConnectionProfileGcsProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">reset_root_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_root_path` <a name="reset_root_path" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```python
def reset_root_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">root_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">root_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `root_path_input`<sup>Optional</sup> <a name="root_path_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```python
root_path_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `root_path`<sup>Required</sup> <a name="root_path" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```python
root_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```python
internal_value: DatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---


### DatastreamConnectionProfileMysqlProfileOutputReference <a name="DatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">put_ssl_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">reset_ssl_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssl_config` <a name="put_ssl_config" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```python
def put_ssl_config(
  ca_certificate: str = None,
  client_certificate: str = None,
  client_key: str = None
) -> None
```

###### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.caCertificate"></a>

- *Type:* str

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

###### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.clientCertificate"></a>

- *Type:* str

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

###### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.clientKey"></a>

- *Type:* str

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_ssl_config` <a name="reset_ssl_config" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```python
def reset_ssl_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">ssl_config_input</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssl_config`<sup>Required</sup> <a name="ssl_config" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```python
ssl_config: DatastreamConnectionProfileMysqlProfileSslConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_config_input`<sup>Optional</sup> <a name="ssl_config_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```python
ssl_config_input: DatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```python
internal_value: DatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---


### DatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="DatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">reset_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">reset_client_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_certificate` <a name="reset_ca_certificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```python
def reset_ca_certificate() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```python
def reset_client_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">ca_certificate_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">client_certificate_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">client_key_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate_set`<sup>Required</sup> <a name="ca_certificate_set" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```python
ca_certificate_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_certificate_set`<sup>Required</sup> <a name="client_certificate_set" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```python
client_certificate_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_key_set`<sup>Required</sup> <a name="client_key_set" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```python
client_key_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### DatastreamConnectionProfileOracleProfileOutputReference <a name="DatastreamConnectionProfileOracleProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">reset_connection_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_attributes` <a name="reset_connection_attributes" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```python
def reset_connection_attributes() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">connection_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">database_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">connection_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">database_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_attributes_input`<sup>Optional</sup> <a name="connection_attributes_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```python
connection_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_service_input`<sup>Optional</sup> <a name="database_service_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```python
database_service_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `connection_attributes`<sup>Required</sup> <a name="connection_attributes" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```python
connection_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_service`<sup>Required</sup> <a name="database_service" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```python
database_service: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```python
internal_value: DatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---


### DatastreamConnectionProfilePostgresqlProfileOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```python
internal_value: DatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---


### DatastreamConnectionProfilePrivateConnectivityOutputReference <a name="DatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">private_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">private_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_connection_input`<sup>Optional</sup> <a name="private_connection_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```python
private_connection_input: str
```

- *Type:* str

---

##### `private_connection`<sup>Required</sup> <a name="private_connection" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```python
private_connection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```python
internal_value: DatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---


### DatastreamConnectionProfileTimeoutsOutputReference <a name="DatastreamConnectionProfileTimeoutsOutputReference" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_connection_profile

datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatastreamConnectionProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>]

---



