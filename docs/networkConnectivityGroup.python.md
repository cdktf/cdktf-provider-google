# `networkConnectivityGroup` Submodule <a name="`networkConnectivityGroup` Submodule" id="@cdktf/provider-google.networkConnectivityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityGroup <a name="NetworkConnectivityGroup" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group google_network_connectivity_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_group

networkConnectivityGroup.NetworkConnectivityGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hub: str,
  name: str,
  auto_accept: NetworkConnectivityGroupAutoAccept = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkConnectivityGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.hub">hub</a></code> | <code>str</code> | The name of the hub. Hub names must be unique. They use the following form: projects/{projectNumber}/locations/global/hubs/{hubId}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the group. Group names must be unique. Possible values: ["default", "center", "edge"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.autoAccept">auto_accept</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept">NetworkConnectivityGroupAutoAccept</a></code> | auto_accept block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the group. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#id NetworkConnectivityGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#project NetworkConnectivityGroup#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts">NetworkConnectivityGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.hub"></a>

- *Type:* str

The name of the hub. Hub names must be unique. They use the following form: projects/{projectNumber}/locations/global/hubs/{hubId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#hub NetworkConnectivityGroup#hub}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.name"></a>

- *Type:* str

The name of the group. Group names must be unique. Possible values: ["default", "center", "edge"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#name NetworkConnectivityGroup#name}

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.autoAccept"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept">NetworkConnectivityGroupAutoAccept</a>

auto_accept block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#auto_accept NetworkConnectivityGroup#auto_accept}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#description NetworkConnectivityGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#id NetworkConnectivityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#labels NetworkConnectivityGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#project NetworkConnectivityGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts">NetworkConnectivityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#timeouts NetworkConnectivityGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.putAutoAccept">put_auto_accept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetAutoAccept">reset_auto_accept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_accept` <a name="put_auto_accept" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.putAutoAccept"></a>

```python
def put_auto_accept(
  auto_accept_projects: typing.List[str]
) -> None
```

###### `auto_accept_projects`<sup>Required</sup> <a name="auto_accept_projects" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.putAutoAccept.parameter.autoAcceptProjects"></a>

- *Type:* typing.List[str]

A list of project ids or project numbers for which you want to enable auto-accept.

The auto-accept setting is applied to spokes being created or updated in these projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#auto_accept_projects NetworkConnectivityGroup#auto_accept_projects}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#create NetworkConnectivityGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#delete NetworkConnectivityGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#update NetworkConnectivityGroup#update}.

---

##### `reset_auto_accept` <a name="reset_auto_accept" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetAutoAccept"></a>

```python
def reset_auto_accept() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkConnectivityGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_group

networkConnectivityGroup.NetworkConnectivityGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_group

networkConnectivityGroup.NetworkConnectivityGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_group

networkConnectivityGroup.NetworkConnectivityGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_group

networkConnectivityGroup.NetworkConnectivityGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkConnectivityGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkConnectivityGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkConnectivityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.autoAccept">auto_accept</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference">NetworkConnectivityGroupAutoAcceptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.routeTable">route_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference">NetworkConnectivityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.autoAcceptInput">auto_accept_input</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept">NetworkConnectivityGroupAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.hubInput">hub_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts">NetworkConnectivityGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.hub">hub</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_accept`<sup>Required</sup> <a name="auto_accept" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.autoAccept"></a>

```python
auto_accept: NetworkConnectivityGroupAutoAcceptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference">NetworkConnectivityGroupAutoAcceptOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `route_table`<sup>Required</sup> <a name="route_table" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.routeTable"></a>

```python
route_table: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.timeouts"></a>

```python
timeouts: NetworkConnectivityGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference">NetworkConnectivityGroupTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `auto_accept_input`<sup>Optional</sup> <a name="auto_accept_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.autoAcceptInput"></a>

```python
auto_accept_input: NetworkConnectivityGroupAutoAccept
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept">NetworkConnectivityGroupAutoAccept</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hub_input`<sup>Optional</sup> <a name="hub_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.hubInput"></a>

```python
hub_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkConnectivityGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts">NetworkConnectivityGroupTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.hub"></a>

```python
hub: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityGroupAutoAccept <a name="NetworkConnectivityGroupAutoAccept" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_group

networkConnectivityGroup.NetworkConnectivityGroupAutoAccept(
  auto_accept_projects: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept.property.autoAcceptProjects">auto_accept_projects</a></code> | <code>typing.List[str]</code> | A list of project ids or project numbers for which you want to enable auto-accept. |

---

##### `auto_accept_projects`<sup>Required</sup> <a name="auto_accept_projects" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept.property.autoAcceptProjects"></a>

```python
auto_accept_projects: typing.List[str]
```

- *Type:* typing.List[str]

A list of project ids or project numbers for which you want to enable auto-accept.

The auto-accept setting is applied to spokes being created or updated in these projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#auto_accept_projects NetworkConnectivityGroup#auto_accept_projects}

---

### NetworkConnectivityGroupConfig <a name="NetworkConnectivityGroupConfig" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_group

networkConnectivityGroup.NetworkConnectivityGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hub: str,
  name: str,
  auto_accept: NetworkConnectivityGroupAutoAccept = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkConnectivityGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.hub">hub</a></code> | <code>str</code> | The name of the hub. Hub names must be unique. They use the following form: projects/{projectNumber}/locations/global/hubs/{hubId}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.name">name</a></code> | <code>str</code> | The name of the group. Group names must be unique. Possible values: ["default", "center", "edge"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.autoAccept">auto_accept</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept">NetworkConnectivityGroupAutoAccept</a></code> | auto_accept block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.description">description</a></code> | <code>str</code> | An optional description of the group. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#id NetworkConnectivityGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#project NetworkConnectivityGroup#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts">NetworkConnectivityGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.hub"></a>

```python
hub: str
```

- *Type:* str

The name of the hub. Hub names must be unique. They use the following form: projects/{projectNumber}/locations/global/hubs/{hubId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#hub NetworkConnectivityGroup#hub}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the group. Group names must be unique. Possible values: ["default", "center", "edge"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#name NetworkConnectivityGroup#name}

---

##### `auto_accept`<sup>Optional</sup> <a name="auto_accept" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.autoAccept"></a>

```python
auto_accept: NetworkConnectivityGroupAutoAccept
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept">NetworkConnectivityGroupAutoAccept</a>

auto_accept block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#auto_accept NetworkConnectivityGroup#auto_accept}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#description NetworkConnectivityGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#id NetworkConnectivityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#labels NetworkConnectivityGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#project NetworkConnectivityGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupConfig.property.timeouts"></a>

```python
timeouts: NetworkConnectivityGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts">NetworkConnectivityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#timeouts NetworkConnectivityGroup#timeouts}

---

### NetworkConnectivityGroupTimeouts <a name="NetworkConnectivityGroupTimeouts" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_group

networkConnectivityGroup.NetworkConnectivityGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#create NetworkConnectivityGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#delete NetworkConnectivityGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#update NetworkConnectivityGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#create NetworkConnectivityGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#delete NetworkConnectivityGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/network_connectivity_group#update NetworkConnectivityGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityGroupAutoAcceptOutputReference <a name="NetworkConnectivityGroupAutoAcceptOutputReference" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_group

networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.property.autoAcceptProjectsInput">auto_accept_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.property.autoAcceptProjects">auto_accept_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept">NetworkConnectivityGroupAutoAccept</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_accept_projects_input`<sup>Optional</sup> <a name="auto_accept_projects_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.property.autoAcceptProjectsInput"></a>

```python
auto_accept_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_accept_projects`<sup>Required</sup> <a name="auto_accept_projects" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.property.autoAcceptProjects"></a>

```python
auto_accept_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAcceptOutputReference.property.internalValue"></a>

```python
internal_value: NetworkConnectivityGroupAutoAccept
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupAutoAccept">NetworkConnectivityGroupAutoAccept</a>

---


### NetworkConnectivityGroupTimeoutsOutputReference <a name="NetworkConnectivityGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_group

networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts">NetworkConnectivityGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkConnectivityGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityGroup.NetworkConnectivityGroupTimeouts">NetworkConnectivityGroupTimeouts</a>]

---



