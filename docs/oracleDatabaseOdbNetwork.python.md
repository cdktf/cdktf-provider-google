# `oracleDatabaseOdbNetwork` Submodule <a name="`oracleDatabaseOdbNetwork` Submodule" id="@cdktf/provider-google.oracleDatabaseOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseOdbNetwork <a name="OracleDatabaseOdbNetwork" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network google_oracle_database_odb_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_odb_network

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  network: str,
  odb_network_id: str,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: OracleDatabaseOdbNetworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.network">network</a></code> | <code>str</code> | The name of the VPC network in the following format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.odbNetworkId">odb_network_id</a></code> | <code>str</code> | The ID of the OdbNetwork to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#location OracleDatabaseOdbNetwork#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.network"></a>

- *Type:* str

The name of the VPC network in the following format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#network OracleDatabaseOdbNetwork#network}

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.odbNetworkId"></a>

- *Type:* str

The ID of the OdbNetwork to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#odb_network_id OracleDatabaseOdbNetwork#odb_network_id}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#deletion_protection OracleDatabaseOdbNetwork#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#labels OracleDatabaseOdbNetwork#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#timeouts OracleDatabaseOdbNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#create OracleDatabaseOdbNetwork#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#delete OracleDatabaseOdbNetwork#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#update OracleDatabaseOdbNetwork#update}.

---

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OracleDatabaseOdbNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_odb_network

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_odb_network

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_odb_network

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_odb_network

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OracleDatabaseOdbNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OracleDatabaseOdbNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OracleDatabaseOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference">OracleDatabaseOdbNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkIdInput">odb_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeouts"></a>

```python
timeouts: OracleDatabaseOdbNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference">OracleDatabaseOdbNetworkTimeoutsOutputReference</a>

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `odb_network_id_input`<sup>Optional</sup> <a name="odb_network_id_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkIdInput"></a>

```python
odb_network_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OracleDatabaseOdbNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseOdbNetworkConfig <a name="OracleDatabaseOdbNetworkConfig" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_odb_network

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  network: str,
  odb_network_id: str,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: OracleDatabaseOdbNetworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.network">network</a></code> | <code>str</code> | The name of the VPC network in the following format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | The ID of the OdbNetwork to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#location OracleDatabaseOdbNetwork#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC network in the following format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#network OracleDatabaseOdbNetwork#network}

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

The ID of the OdbNetwork to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#odb_network_id OracleDatabaseOdbNetwork#odb_network_id}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#deletion_protection OracleDatabaseOdbNetwork#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#id OracleDatabaseOdbNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#labels OracleDatabaseOdbNetwork#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#project OracleDatabaseOdbNetwork#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkConfig.property.timeouts"></a>

```python
timeouts: OracleDatabaseOdbNetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#timeouts OracleDatabaseOdbNetwork#timeouts}

---

### OracleDatabaseOdbNetworkTimeouts <a name="OracleDatabaseOdbNetworkTimeouts" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_odb_network

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#create OracleDatabaseOdbNetwork#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#delete OracleDatabaseOdbNetwork#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#update OracleDatabaseOdbNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#create OracleDatabaseOdbNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#delete OracleDatabaseOdbNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/oracle_database_odb_network#update OracleDatabaseOdbNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseOdbNetworkTimeoutsOutputReference <a name="OracleDatabaseOdbNetworkTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_odb_network

oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OracleDatabaseOdbNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseOdbNetwork.OracleDatabaseOdbNetworkTimeouts">OracleDatabaseOdbNetworkTimeouts</a>]

---



