# `datastreamPrivateConnection` Submodule <a name="`datastreamPrivateConnection` Submodule" id="@cdktf/provider-google.datastreamPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastreamPrivateConnection <a name="DatastreamPrivateConnection" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection google_datastream_private_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  private_connection_id: str,
  vpc_peering_config: DatastreamPrivateConnectionVpcPeeringConfig,
  create_without_validation: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DatastreamPrivateConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.privateConnectionId">private_connection_id</a></code> | <code>str</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.vpcPeeringConfig">vpc_peering_config</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.createWithoutValidation">create_without_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, will skip validations. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#id DatastreamPrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#project DatastreamPrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.displayName"></a>

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#display_name DatastreamPrivateConnection#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#location DatastreamPrivateConnection#location}

---

##### `private_connection_id`<sup>Required</sup> <a name="private_connection_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.privateConnectionId"></a>

- *Type:* str

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#private_connection_id DatastreamPrivateConnection#private_connection_id}

---

##### `vpc_peering_config`<sup>Required</sup> <a name="vpc_peering_config" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.vpcPeeringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#vpc_peering_config DatastreamPrivateConnection#vpc_peering_config}

---

##### `create_without_validation`<sup>Optional</sup> <a name="create_without_validation" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.createWithoutValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, will skip validations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#create_without_validation DatastreamPrivateConnection#create_without_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#id DatastreamPrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#labels DatastreamPrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#project DatastreamPrivateConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#timeouts DatastreamPrivateConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putVpcPeeringConfig">put_vpc_peering_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetCreateWithoutValidation">reset_create_without_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#create DatastreamPrivateConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#delete DatastreamPrivateConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#update DatastreamPrivateConnection#update}.

---

##### `put_vpc_peering_config` <a name="put_vpc_peering_config" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putVpcPeeringConfig"></a>

```python
def put_vpc_peering_config(
  subnet: str,
  vpc: str
) -> None
```

###### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putVpcPeeringConfig.parameter.subnet"></a>

- *Type:* str

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#subnet DatastreamPrivateConnection#subnet}

---

###### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putVpcPeeringConfig.parameter.vpc"></a>

- *Type:* str

Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#vpc DatastreamPrivateConnection#vpc}

---

##### `reset_create_without_validation` <a name="reset_create_without_validation" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetCreateWithoutValidation"></a>

```python
def reset_create_without_validation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatastreamPrivateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatastreamPrivateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatastreamPrivateConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatastreamPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatastreamPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList">DatastreamPrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference">DatastreamPrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfig">vpc_peering_config</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference">DatastreamPrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidationInput">create_without_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionIdInput">private_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfigInput">vpc_peering_config_input</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidation">create_without_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionId">private_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.error"></a>

```python
error: DatastreamPrivateConnectionErrorList
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList">DatastreamPrivateConnectionErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeouts"></a>

```python
timeouts: DatastreamPrivateConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference">DatastreamPrivateConnectionTimeoutsOutputReference</a>

---

##### `vpc_peering_config`<sup>Required</sup> <a name="vpc_peering_config" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfig"></a>

```python
vpc_peering_config: DatastreamPrivateConnectionVpcPeeringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference">DatastreamPrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `create_without_validation_input`<sup>Optional</sup> <a name="create_without_validation_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidationInput"></a>

```python
create_without_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `private_connection_id_input`<sup>Optional</sup> <a name="private_connection_id_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionIdInput"></a>

```python
private_connection_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatastreamPrivateConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>]

---

##### `vpc_peering_config_input`<sup>Optional</sup> <a name="vpc_peering_config_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfigInput"></a>

```python
vpc_peering_config_input: DatastreamPrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

---

##### `create_without_validation`<sup>Required</sup> <a name="create_without_validation" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidation"></a>

```python
create_without_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `private_connection_id`<sup>Required</sup> <a name="private_connection_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionId"></a>

```python
private_connection_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatastreamPrivateConnectionConfig <a name="DatastreamPrivateConnectionConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  private_connection_id: str,
  vpc_peering_config: DatastreamPrivateConnectionVpcPeeringConfig,
  create_without_validation: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DatastreamPrivateConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.location">location</a></code> | <code>str</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.privateConnectionId">private_connection_id</a></code> | <code>str</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.vpcPeeringConfig">vpc_peering_config</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.createWithoutValidation">create_without_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, will skip validations. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#id DatastreamPrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#project DatastreamPrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#display_name DatastreamPrivateConnection#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#location DatastreamPrivateConnection#location}

---

##### `private_connection_id`<sup>Required</sup> <a name="private_connection_id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.privateConnectionId"></a>

```python
private_connection_id: str
```

- *Type:* str

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#private_connection_id DatastreamPrivateConnection#private_connection_id}

---

##### `vpc_peering_config`<sup>Required</sup> <a name="vpc_peering_config" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.vpcPeeringConfig"></a>

```python
vpc_peering_config: DatastreamPrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#vpc_peering_config DatastreamPrivateConnection#vpc_peering_config}

---

##### `create_without_validation`<sup>Optional</sup> <a name="create_without_validation" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.createWithoutValidation"></a>

```python
create_without_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, will skip validations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#create_without_validation DatastreamPrivateConnection#create_without_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#id DatastreamPrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#labels DatastreamPrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#project DatastreamPrivateConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.timeouts"></a>

```python
timeouts: DatastreamPrivateConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#timeouts DatastreamPrivateConnection#timeouts}

---

### DatastreamPrivateConnectionError <a name="DatastreamPrivateConnectionError" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnectionError()
```


### DatastreamPrivateConnectionTimeouts <a name="DatastreamPrivateConnectionTimeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#create DatastreamPrivateConnection#create}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#delete DatastreamPrivateConnection#delete}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#update DatastreamPrivateConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#create DatastreamPrivateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#delete DatastreamPrivateConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#update DatastreamPrivateConnection#update}.

---

### DatastreamPrivateConnectionVpcPeeringConfig <a name="DatastreamPrivateConnectionVpcPeeringConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig(
  subnet: str,
  vpc: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.subnet">subnet</a></code> | <code>str</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.vpc">vpc</a></code> | <code>str</code> | Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#subnet DatastreamPrivateConnection#subnet}

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.vpc"></a>

```python
vpc: str
```

- *Type:* str

Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/datastream_private_connection#vpc DatastreamPrivateConnection#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### DatastreamPrivateConnectionErrorList <a name="DatastreamPrivateConnectionErrorList" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnectionErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatastreamPrivateConnectionErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatastreamPrivateConnectionErrorOutputReference <a name="DatastreamPrivateConnectionErrorOutputReference" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError">DatastreamPrivateConnectionError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.details"></a>

```python
details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.internalValue"></a>

```python
internal_value: DatastreamPrivateConnectionError
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError">DatastreamPrivateConnectionError</a>

---


### DatastreamPrivateConnectionTimeoutsOutputReference <a name="DatastreamPrivateConnectionTimeoutsOutputReference" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatastreamPrivateConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>]

---


### DatastreamPrivateConnectionVpcPeeringConfigOutputReference <a name="DatastreamPrivateConnectionVpcPeeringConfigOutputReference" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import datastream_private_connection

datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpcInput">vpc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpc">vpc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpcInput"></a>

```python
vpc_input: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpc"></a>

```python
vpc: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatastreamPrivateConnectionVpcPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

---



