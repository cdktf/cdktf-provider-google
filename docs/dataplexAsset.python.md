# `dataplexAsset` Submodule <a name="`dataplexAsset` Submodule" id="@cdktf/provider-google.dataplexAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexAsset <a name="DataplexAsset" id="@cdktf/provider-google.dataplexAsset.DataplexAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset google_dataplex_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAsset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataplex_zone: str,
  discovery_spec: DataplexAssetDiscoverySpec,
  lake: str,
  location: str,
  name: str,
  resource_spec: DataplexAssetResourceSpec,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DataplexAssetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.dataplexZone">dataplex_zone</a></code> | <code>str</code> | The zone for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.discoverySpec">discovery_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.lake">lake</a></code> | <code>str</code> | The lake for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the asset. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.resourceSpec">resource_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Description of the asset. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#id DataplexAsset#id}. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined labels for the asset. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataplex_zone`<sup>Required</sup> <a name="dataplex_zone" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.dataplexZone"></a>

- *Type:* str

The zone for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#dataplex_zone DataplexAsset#dataplex_zone}

---

##### `discovery_spec`<sup>Required</sup> <a name="discovery_spec" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.discoverySpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#discovery_spec DataplexAsset#discovery_spec}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.lake"></a>

- *Type:* str

The lake for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#lake DataplexAsset#lake}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#location DataplexAsset#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.name"></a>

- *Type:* str

The name of the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#name DataplexAsset#name}

---

##### `resource_spec`<sup>Required</sup> <a name="resource_spec" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.resourceSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#resource_spec DataplexAsset#resource_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.description"></a>

- *Type:* str

Optional. Description of the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#description DataplexAsset#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#display_name DataplexAsset#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#id DataplexAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. User defined labels for the asset.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#labels DataplexAsset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#project DataplexAsset#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#timeouts DataplexAsset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec">put_discovery_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.putResourceSpec">put_resource_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_discovery_spec` <a name="put_discovery_spec" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec"></a>

```python
def put_discovery_spec(
  enabled: typing.Union[bool, IResolvable],
  csv_options: DataplexAssetDiscoverySpecCsvOptions = None,
  exclude_patterns: typing.List[str] = None,
  include_patterns: typing.List[str] = None,
  json_options: DataplexAssetDiscoverySpecJsonOptions = None,
  schedule: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Required. Whether discovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#enabled DataplexAsset#enabled}

---

###### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec.parameter.csvOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#csv_options DataplexAsset#csv_options}

---

###### `exclude_patterns`<sup>Optional</sup> <a name="exclude_patterns" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec.parameter.excludePatterns"></a>

- *Type:* typing.List[str]

Optional.

The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#exclude_patterns DataplexAsset#exclude_patterns}

---

###### `include_patterns`<sup>Optional</sup> <a name="include_patterns" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec.parameter.includePatterns"></a>

- *Type:* typing.List[str]

Optional.

The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#include_patterns DataplexAsset#include_patterns}

---

###### `json_options`<sup>Optional</sup> <a name="json_options" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec.parameter.jsonOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#json_options DataplexAsset#json_options}

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putDiscoverySpec.parameter.schedule"></a>

- *Type:* str

Optional.

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#schedule DataplexAsset#schedule}

---

##### `put_resource_spec` <a name="put_resource_spec" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putResourceSpec"></a>

```python
def put_resource_spec(
  type: str,
  name: str = None,
  read_access_mode: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putResourceSpec.parameter.type"></a>

- *Type:* str

Required. Immutable. Type of resource. Possible values: STORAGE_BUCKET, BIGQUERY_DATASET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#type DataplexAsset#type}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putResourceSpec.parameter.name"></a>

- *Type:* str

Immutable.

Relative name of the cloud resource that contains the data that is being managed within a lake. For example: `projects/{project_number}/buckets/{bucket_id}` `projects/{project_number}/datasets/{dataset_id}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#name DataplexAsset#name}

---

###### `read_access_mode`<sup>Optional</sup> <a name="read_access_mode" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putResourceSpec.parameter.readAccessMode"></a>

- *Type:* str

Optional.

Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets. Possible values: DIRECT, MANAGED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#read_access_mode DataplexAsset#read_access_mode}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#create DataplexAsset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#delete DataplexAsset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#update DataplexAsset#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataplexAsset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAsset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataplexAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataplexAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataplexAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataplexAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoverySpec">discovery_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference">DataplexAssetDiscoverySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoveryStatus">discovery_status</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList">DataplexAssetDiscoveryStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceSpec">resource_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference">DataplexAssetResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceStatus">resource_status</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList">DataplexAssetResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.securityStatus">security_status</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList">DataplexAssetSecurityStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference">DataplexAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dataplexZoneInput">dataplex_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoverySpecInput">discovery_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lakeInput">lake_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceSpecInput">resource_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dataplexZone">dataplex_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lake">lake</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `discovery_spec`<sup>Required</sup> <a name="discovery_spec" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoverySpec"></a>

```python
discovery_spec: DataplexAssetDiscoverySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference">DataplexAssetDiscoverySpecOutputReference</a>

---

##### `discovery_status`<sup>Required</sup> <a name="discovery_status" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoveryStatus"></a>

```python
discovery_status: DataplexAssetDiscoveryStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList">DataplexAssetDiscoveryStatusList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `resource_spec`<sup>Required</sup> <a name="resource_spec" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceSpec"></a>

```python
resource_spec: DataplexAssetResourceSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference">DataplexAssetResourceSpecOutputReference</a>

---

##### `resource_status`<sup>Required</sup> <a name="resource_status" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceStatus"></a>

```python
resource_status: DataplexAssetResourceStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList">DataplexAssetResourceStatusList</a>

---

##### `security_status`<sup>Required</sup> <a name="security_status" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.securityStatus"></a>

```python
security_status: DataplexAssetSecurityStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList">DataplexAssetSecurityStatusList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.timeouts"></a>

```python
timeouts: DataplexAssetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference">DataplexAssetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `dataplex_zone_input`<sup>Optional</sup> <a name="dataplex_zone_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dataplexZoneInput"></a>

```python
dataplex_zone_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `discovery_spec_input`<sup>Optional</sup> <a name="discovery_spec_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.discoverySpecInput"></a>

```python
discovery_spec_input: DataplexAssetDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lake_input`<sup>Optional</sup> <a name="lake_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lakeInput"></a>

```python
lake_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_spec_input`<sup>Optional</sup> <a name="resource_spec_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.resourceSpecInput"></a>

```python
resource_spec_input: DataplexAssetResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataplexAssetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a>]

---

##### `dataplex_zone`<sup>Required</sup> <a name="dataplex_zone" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.dataplexZone"></a>

```python
dataplex_zone: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.lake"></a>

```python
lake: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataplexAsset.DataplexAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexAssetConfig <a name="DataplexAssetConfig" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataplex_zone: str,
  discovery_spec: DataplexAssetDiscoverySpec,
  lake: str,
  location: str,
  name: str,
  resource_spec: DataplexAssetResourceSpec,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DataplexAssetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.dataplexZone">dataplex_zone</a></code> | <code>str</code> | The zone for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.discoverySpec">discovery_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.lake">lake</a></code> | <code>str</code> | The lake for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.name">name</a></code> | <code>str</code> | The name of the asset. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.resourceSpec">resource_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.description">description</a></code> | <code>str</code> | Optional. Description of the asset. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#id DataplexAsset#id}. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined labels for the asset. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataplex_zone`<sup>Required</sup> <a name="dataplex_zone" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.dataplexZone"></a>

```python
dataplex_zone: str
```

- *Type:* str

The zone for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#dataplex_zone DataplexAsset#dataplex_zone}

---

##### `discovery_spec`<sup>Required</sup> <a name="discovery_spec" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.discoverySpec"></a>

```python
discovery_spec: DataplexAssetDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#discovery_spec DataplexAsset#discovery_spec}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.lake"></a>

```python
lake: str
```

- *Type:* str

The lake for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#lake DataplexAsset#lake}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#location DataplexAsset#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#name DataplexAsset#name}

---

##### `resource_spec`<sup>Required</sup> <a name="resource_spec" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.resourceSpec"></a>

```python
resource_spec: DataplexAssetResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#resource_spec DataplexAsset#resource_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#description DataplexAsset#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#display_name DataplexAsset#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#id DataplexAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User defined labels for the asset.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#labels DataplexAsset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#project DataplexAsset#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAssetConfig.property.timeouts"></a>

```python
timeouts: DataplexAssetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#timeouts DataplexAsset#timeouts}

---

### DataplexAssetDiscoverySpec <a name="DataplexAssetDiscoverySpec" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoverySpec(
  enabled: typing.Union[bool, IResolvable],
  csv_options: DataplexAssetDiscoverySpecCsvOptions = None,
  exclude_patterns: typing.List[str] = None,
  include_patterns: typing.List[str] = None,
  json_options: DataplexAssetDiscoverySpecJsonOptions = None,
  schedule: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Required. Whether discovery is enabled. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.excludePatterns">exclude_patterns</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.includePatterns">include_patterns</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.schedule">schedule</a></code> | <code>str</code> | Optional. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Required. Whether discovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#enabled DataplexAsset#enabled}

---

##### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.csvOptions"></a>

```python
csv_options: DataplexAssetDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#csv_options DataplexAsset#csv_options}

---

##### `exclude_patterns`<sup>Optional</sup> <a name="exclude_patterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.excludePatterns"></a>

```python
exclude_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#exclude_patterns DataplexAsset#exclude_patterns}

---

##### `include_patterns`<sup>Optional</sup> <a name="include_patterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.includePatterns"></a>

```python
include_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#include_patterns DataplexAsset#include_patterns}

---

##### `json_options`<sup>Optional</sup> <a name="json_options" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.jsonOptions"></a>

```python
json_options: DataplexAssetDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#json_options DataplexAsset#json_options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Optional.

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#schedule DataplexAsset#schedule}

---

### DataplexAssetDiscoverySpecCsvOptions <a name="DataplexAssetDiscoverySpecCsvOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoverySpecCsvOptions(
  delimiter: str = None,
  disable_type_inference: typing.Union[bool, IResolvable] = None,
  encoding: str = None,
  header_rows: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.delimiter">delimiter</a></code> | <code>str</code> | Optional. The delimiter being used to separate values. This defaults to ','. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.disableTypeInference">disable_type_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.encoding">encoding</a></code> | <code>str</code> | Optional. The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.headerRows">header_rows</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Optional. The delimiter being used to separate values. This defaults to ','.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#delimiter DataplexAsset#delimiter}

---

##### `disable_type_inference`<sup>Optional</sup> <a name="disable_type_inference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.disableTypeInference"></a>

```python
disable_type_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#disable_type_inference DataplexAsset#disable_type_inference}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#encoding DataplexAsset#encoding}

---

##### `header_rows`<sup>Optional</sup> <a name="header_rows" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions.property.headerRows"></a>

```python
header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#header_rows DataplexAsset#header_rows}

---

### DataplexAssetDiscoverySpecJsonOptions <a name="DataplexAssetDiscoverySpecJsonOptions" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoverySpecJsonOptions(
  disable_type_inference: typing.Union[bool, IResolvable] = None,
  encoding: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions.property.disableTypeInference">disable_type_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions.property.encoding">encoding</a></code> | <code>str</code> | Optional. The character encoding of the data. The default is UTF-8. |

---

##### `disable_type_inference`<sup>Optional</sup> <a name="disable_type_inference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions.property.disableTypeInference"></a>

```python
disable_type_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#disable_type_inference DataplexAsset#disable_type_inference}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#encoding DataplexAsset#encoding}

---

### DataplexAssetDiscoveryStatus <a name="DataplexAssetDiscoveryStatus" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoveryStatus()
```


### DataplexAssetDiscoveryStatusStats <a name="DataplexAssetDiscoveryStatusStats" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStats.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoveryStatusStats()
```


### DataplexAssetResourceSpec <a name="DataplexAssetResourceSpec" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetResourceSpec(
  type: str,
  name: str = None,
  read_access_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.property.type">type</a></code> | <code>str</code> | Required. Immutable. Type of resource. Possible values: STORAGE_BUCKET, BIGQUERY_DATASET. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.property.name">name</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.property.readAccessMode">read_access_mode</a></code> | <code>str</code> | Optional. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.property.type"></a>

```python
type: str
```

- *Type:* str

Required. Immutable. Type of resource. Possible values: STORAGE_BUCKET, BIGQUERY_DATASET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#type DataplexAsset#type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.property.name"></a>

```python
name: str
```

- *Type:* str

Immutable.

Relative name of the cloud resource that contains the data that is being managed within a lake. For example: `projects/{project_number}/buckets/{bucket_id}` `projects/{project_number}/datasets/{dataset_id}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#name DataplexAsset#name}

---

##### `read_access_mode`<sup>Optional</sup> <a name="read_access_mode" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec.property.readAccessMode"></a>

```python
read_access_mode: str
```

- *Type:* str

Optional.

Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets. Possible values: DIRECT, MANAGED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#read_access_mode DataplexAsset#read_access_mode}

---

### DataplexAssetResourceStatus <a name="DataplexAssetResourceStatus" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetResourceStatus()
```


### DataplexAssetSecurityStatus <a name="DataplexAssetSecurityStatus" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetSecurityStatus()
```


### DataplexAssetTimeouts <a name="DataplexAssetTimeouts" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#create DataplexAsset#create}. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#delete DataplexAsset#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#update DataplexAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#create DataplexAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#delete DataplexAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#update DataplexAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexAssetDiscoverySpecCsvOptionsOutputReference <a name="DataplexAssetDiscoverySpecCsvOptionsOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference">reset_disable_type_inference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetHeaderRows">reset_header_rows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_disable_type_inference` <a name="reset_disable_type_inference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference"></a>

```python
def reset_disable_type_inference() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_header_rows` <a name="reset_header_rows" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.resetHeaderRows"></a>

```python
def reset_header_rows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput">disable_type_inference_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput">header_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference">disable_type_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.headerRows">header_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `disable_type_inference_input`<sup>Optional</sup> <a name="disable_type_inference_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput"></a>

```python
disable_type_inference_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `header_rows_input`<sup>Optional</sup> <a name="header_rows_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput"></a>

```python
header_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `disable_type_inference`<sup>Required</sup> <a name="disable_type_inference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference"></a>

```python
disable_type_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `header_rows`<sup>Required</sup> <a name="header_rows" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.headerRows"></a>

```python
header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataplexAssetDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a>

---


### DataplexAssetDiscoverySpecJsonOptionsOutputReference <a name="DataplexAssetDiscoverySpecJsonOptionsOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference">reset_disable_type_inference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_type_inference` <a name="reset_disable_type_inference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference"></a>

```python
def reset_disable_type_inference() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput">disable_type_inference_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference">disable_type_inference</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_type_inference_input`<sup>Optional</sup> <a name="disable_type_inference_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput"></a>

```python
disable_type_inference_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `disable_type_inference`<sup>Required</sup> <a name="disable_type_inference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference"></a>

```python
disable_type_inference: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataplexAssetDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a>

---


### DataplexAssetDiscoverySpecOutputReference <a name="DataplexAssetDiscoverySpecOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoverySpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putCsvOptions">put_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putJsonOptions">put_json_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetCsvOptions">reset_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetExcludePatterns">reset_exclude_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetIncludePatterns">reset_include_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetJsonOptions">reset_json_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv_options` <a name="put_csv_options" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putCsvOptions"></a>

```python
def put_csv_options(
  delimiter: str = None,
  disable_type_inference: typing.Union[bool, IResolvable] = None,
  encoding: str = None,
  header_rows: typing.Union[int, float] = None
) -> None
```

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putCsvOptions.parameter.delimiter"></a>

- *Type:* str

Optional. The delimiter being used to separate values. This defaults to ','.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#delimiter DataplexAsset#delimiter}

---

###### `disable_type_inference`<sup>Optional</sup> <a name="disable_type_inference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putCsvOptions.parameter.disableTypeInference"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#disable_type_inference DataplexAsset#disable_type_inference}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putCsvOptions.parameter.encoding"></a>

- *Type:* str

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#encoding DataplexAsset#encoding}

---

###### `header_rows`<sup>Optional</sup> <a name="header_rows" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putCsvOptions.parameter.headerRows"></a>

- *Type:* typing.Union[int, float]

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#header_rows DataplexAsset#header_rows}

---

##### `put_json_options` <a name="put_json_options" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putJsonOptions"></a>

```python
def put_json_options(
  disable_type_inference: typing.Union[bool, IResolvable] = None,
  encoding: str = None
) -> None
```

###### `disable_type_inference`<sup>Optional</sup> <a name="disable_type_inference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putJsonOptions.parameter.disableTypeInference"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#disable_type_inference DataplexAsset#disable_type_inference}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.putJsonOptions.parameter.encoding"></a>

- *Type:* str

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/dataplex_asset#encoding DataplexAsset#encoding}

---

##### `reset_csv_options` <a name="reset_csv_options" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetCsvOptions"></a>

```python
def reset_csv_options() -> None
```

##### `reset_exclude_patterns` <a name="reset_exclude_patterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetExcludePatterns"></a>

```python
def reset_exclude_patterns() -> None
```

##### `reset_include_patterns` <a name="reset_include_patterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetIncludePatterns"></a>

```python
def reset_include_patterns() -> None
```

##### `reset_json_options` <a name="reset_json_options" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetJsonOptions"></a>

```python
def reset_json_options() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference">DataplexAssetDiscoverySpecCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference">DataplexAssetDiscoverySpecJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.csvOptionsInput">csv_options_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.excludePatternsInput">exclude_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.includePatternsInput">include_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.jsonOptionsInput">json_options_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.excludePatterns">exclude_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.includePatterns">include_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv_options`<sup>Required</sup> <a name="csv_options" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.csvOptions"></a>

```python
csv_options: DataplexAssetDiscoverySpecCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptionsOutputReference">DataplexAssetDiscoverySpecCsvOptionsOutputReference</a>

---

##### `json_options`<sup>Required</sup> <a name="json_options" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.jsonOptions"></a>

```python
json_options: DataplexAssetDiscoverySpecJsonOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptionsOutputReference">DataplexAssetDiscoverySpecJsonOptionsOutputReference</a>

---

##### `csv_options_input`<sup>Optional</sup> <a name="csv_options_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.csvOptionsInput"></a>

```python
csv_options_input: DataplexAssetDiscoverySpecCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecCsvOptions">DataplexAssetDiscoverySpecCsvOptions</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_patterns_input`<sup>Optional</sup> <a name="exclude_patterns_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.excludePatternsInput"></a>

```python
exclude_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_patterns_input`<sup>Optional</sup> <a name="include_patterns_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.includePatternsInput"></a>

```python
include_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `json_options_input`<sup>Optional</sup> <a name="json_options_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.jsonOptionsInput"></a>

```python
json_options_input: DataplexAssetDiscoverySpecJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecJsonOptions">DataplexAssetDiscoverySpecJsonOptions</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclude_patterns`<sup>Required</sup> <a name="exclude_patterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.excludePatterns"></a>

```python
exclude_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_patterns`<sup>Required</sup> <a name="include_patterns" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.includePatterns"></a>

```python
include_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpecOutputReference.property.internalValue"></a>

```python
internal_value: DataplexAssetDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoverySpec">DataplexAssetDiscoverySpec</a>

---


### DataplexAssetDiscoveryStatusList <a name="DataplexAssetDiscoveryStatusList" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoveryStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexAssetDiscoveryStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataplexAssetDiscoveryStatusOutputReference <a name="DataplexAssetDiscoveryStatusOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoveryStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.lastRunDuration">last_run_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.lastRunTime">last_run_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.stats">stats</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList">DataplexAssetDiscoveryStatusStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatus">DataplexAssetDiscoveryStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_run_duration`<sup>Required</sup> <a name="last_run_duration" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.lastRunDuration"></a>

```python
last_run_duration: str
```

- *Type:* str

---

##### `last_run_time`<sup>Required</sup> <a name="last_run_time" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.lastRunTime"></a>

```python
last_run_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `stats`<sup>Required</sup> <a name="stats" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.stats"></a>

```python
stats: DataplexAssetDiscoveryStatusStatsList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList">DataplexAssetDiscoveryStatusStatsList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataplexAssetDiscoveryStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatus">DataplexAssetDiscoveryStatus</a>

---


### DataplexAssetDiscoveryStatusStatsList <a name="DataplexAssetDiscoveryStatusStatsList" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoveryStatusStatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexAssetDiscoveryStatusStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataplexAssetDiscoveryStatusStatsOutputReference <a name="DataplexAssetDiscoveryStatusStatsOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.dataItems">data_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.dataSize">data_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.filesets">filesets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.tables">tables</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStats">DataplexAssetDiscoveryStatusStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_items`<sup>Required</sup> <a name="data_items" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.dataItems"></a>

```python
data_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_size`<sup>Required</sup> <a name="data_size" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.dataSize"></a>

```python
data_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filesets`<sup>Required</sup> <a name="filesets" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.filesets"></a>

```python
filesets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.tables"></a>

```python
tables: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStatsOutputReference.property.internalValue"></a>

```python
internal_value: DataplexAssetDiscoveryStatusStats
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetDiscoveryStatusStats">DataplexAssetDiscoveryStatusStats</a>

---


### DataplexAssetResourceSpecOutputReference <a name="DataplexAssetResourceSpecOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetResourceSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resetReadAccessMode">reset_read_access_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_read_access_mode` <a name="reset_read_access_mode" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.resetReadAccessMode"></a>

```python
def reset_read_access_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.readAccessModeInput">read_access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.readAccessMode">read_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `read_access_mode_input`<sup>Optional</sup> <a name="read_access_mode_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.readAccessModeInput"></a>

```python
read_access_mode_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `read_access_mode`<sup>Required</sup> <a name="read_access_mode" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.readAccessMode"></a>

```python
read_access_mode: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataplexAssetResourceSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceSpec">DataplexAssetResourceSpec</a>

---


### DataplexAssetResourceStatusList <a name="DataplexAssetResourceStatusList" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetResourceStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexAssetResourceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataplexAssetResourceStatusOutputReference <a name="DataplexAssetResourceStatusOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetResourceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatus">DataplexAssetResourceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataplexAssetResourceStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetResourceStatus">DataplexAssetResourceStatus</a>

---


### DataplexAssetSecurityStatusList <a name="DataplexAssetSecurityStatusList" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetSecurityStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexAssetSecurityStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataplexAssetSecurityStatusOutputReference <a name="DataplexAssetSecurityStatusOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetSecurityStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatus">DataplexAssetSecurityStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataplexAssetSecurityStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetSecurityStatus">DataplexAssetSecurityStatus</a>

---


### DataplexAssetTimeoutsOutputReference <a name="DataplexAssetTimeoutsOutputReference" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_asset

dataplexAsset.DataplexAssetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexAsset.DataplexAssetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataplexAssetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexAsset.DataplexAssetTimeouts">DataplexAssetTimeouts</a>]

---



