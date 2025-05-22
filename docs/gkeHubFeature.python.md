# `gkeHubFeature` Submodule <a name="`gkeHubFeature` Submodule" id="@cdktf/provider-google.gkeHubFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubFeature <a name="GkeHubFeature" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature google_gke_hub_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeature(
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
  fleet_default_member_config: GkeHubFeatureFleetDefaultMemberConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  project: str = None,
  spec: GkeHubFeatureSpec = None,
  timeouts: GkeHubFeatureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.fleetDefaultMemberConfig">fleet_default_member_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig">GkeHubFeatureFleetDefaultMemberConfig</a></code> | fleet_default_member_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#id GkeHubFeature#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | GCP labels for this Feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.name">name</a></code> | <code>str</code> | The full, unique name of this Feature resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#project GkeHubFeature#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#location GkeHubFeature#location}

---

##### `fleet_default_member_config`<sup>Optional</sup> <a name="fleet_default_member_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.fleetDefaultMemberConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig">GkeHubFeatureFleetDefaultMemberConfig</a>

fleet_default_member_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#fleet_default_member_config GkeHubFeature#fleet_default_member_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#id GkeHubFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

GCP labels for this Feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#labels GkeHubFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.name"></a>

- *Type:* str

The full, unique name of this Feature resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#name GkeHubFeature#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#project GkeHubFeature#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#spec GkeHubFeature#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#timeouts GkeHubFeature#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putFleetDefaultMemberConfig">put_fleet_default_member_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetFleetDefaultMemberConfig">reset_fleet_default_member_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fleet_default_member_config` <a name="put_fleet_default_member_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putFleetDefaultMemberConfig"></a>

```python
def put_fleet_default_member_config(
  configmanagement: GkeHubFeatureFleetDefaultMemberConfigConfigmanagement = None,
  mesh: GkeHubFeatureFleetDefaultMemberConfigMesh = None,
  policycontroller: GkeHubFeatureFleetDefaultMemberConfigPolicycontroller = None
) -> None
```

###### `configmanagement`<sup>Optional</sup> <a name="configmanagement" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putFleetDefaultMemberConfig.parameter.configmanagement"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a>

configmanagement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#configmanagement GkeHubFeature#configmanagement}

---

###### `mesh`<sup>Optional</sup> <a name="mesh" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putFleetDefaultMemberConfig.parameter.mesh"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh">GkeHubFeatureFleetDefaultMemberConfigMesh</a>

mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#mesh GkeHubFeature#mesh}

---

###### `policycontroller`<sup>Optional</sup> <a name="policycontroller" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putFleetDefaultMemberConfig.parameter.policycontroller"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller">GkeHubFeatureFleetDefaultMemberConfigPolicycontroller</a>

policycontroller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#policycontroller GkeHubFeature#policycontroller}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec"></a>

```python
def put_spec(
  clusterupgrade: GkeHubFeatureSpecClusterupgrade = None,
  fleetobservability: GkeHubFeatureSpecFleetobservability = None,
  multiclusteringress: GkeHubFeatureSpecMulticlusteringress = None
) -> None
```

###### `clusterupgrade`<sup>Optional</sup> <a name="clusterupgrade" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec.parameter.clusterupgrade"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade">GkeHubFeatureSpecClusterupgrade</a>

clusterupgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#clusterupgrade GkeHubFeature#clusterupgrade}

---

###### `fleetobservability`<sup>Optional</sup> <a name="fleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec.parameter.fleetobservability"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

fleetobservability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#fleetobservability GkeHubFeature#fleetobservability}

---

###### `multiclusteringress`<sup>Optional</sup> <a name="multiclusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putSpec.parameter.multiclusteringress"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

multiclusteringress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#multiclusteringress GkeHubFeature#multiclusteringress}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#create GkeHubFeature#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#delete GkeHubFeature#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#update GkeHubFeature#update}.

---

##### `reset_fleet_default_member_config` <a name="reset_fleet_default_member_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetFleetDefaultMemberConfig"></a>

```python
def reset_fleet_default_member_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GkeHubFeature resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GkeHubFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GkeHubFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GkeHubFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeHubFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.fleetDefaultMemberConfig">fleet_default_member_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference">GkeHubFeatureFleetDefaultMemberConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.resourceState">resource_state</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList">GkeHubFeatureResourceStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference">GkeHubFeatureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.state">state</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList">GkeHubFeatureStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference">GkeHubFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.fleetDefaultMemberConfigInput">fleet_default_member_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig">GkeHubFeatureFleetDefaultMemberConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `fleet_default_member_config`<sup>Required</sup> <a name="fleet_default_member_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.fleetDefaultMemberConfig"></a>

```python
fleet_default_member_config: GkeHubFeatureFleetDefaultMemberConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference">GkeHubFeatureFleetDefaultMemberConfigOutputReference</a>

---

##### `resource_state`<sup>Required</sup> <a name="resource_state" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.resourceState"></a>

```python
resource_state: GkeHubFeatureResourceStateList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList">GkeHubFeatureResourceStateList</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.spec"></a>

```python
spec: GkeHubFeatureSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference">GkeHubFeatureSpecOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.state"></a>

```python
state: GkeHubFeatureStateList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList">GkeHubFeatureStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeouts"></a>

```python
timeouts: GkeHubFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference">GkeHubFeatureTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `fleet_default_member_config_input`<sup>Optional</sup> <a name="fleet_default_member_config_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.fleetDefaultMemberConfigInput"></a>

```python
fleet_default_member_config_input: GkeHubFeatureFleetDefaultMemberConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig">GkeHubFeatureFleetDefaultMemberConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.specInput"></a>

```python
spec_input: GkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GkeHubFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubFeatureConfig <a name="GkeHubFeatureConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  fleet_default_member_config: GkeHubFeatureFleetDefaultMemberConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  project: str = None,
  spec: GkeHubFeatureSpec = None,
  timeouts: GkeHubFeatureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.fleetDefaultMemberConfig">fleet_default_member_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig">GkeHubFeatureFleetDefaultMemberConfig</a></code> | fleet_default_member_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#id GkeHubFeature#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | GCP labels for this Feature. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.name">name</a></code> | <code>str</code> | The full, unique name of this Feature resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#project GkeHubFeature#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#location GkeHubFeature#location}

---

##### `fleet_default_member_config`<sup>Optional</sup> <a name="fleet_default_member_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.fleetDefaultMemberConfig"></a>

```python
fleet_default_member_config: GkeHubFeatureFleetDefaultMemberConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig">GkeHubFeatureFleetDefaultMemberConfig</a>

fleet_default_member_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#fleet_default_member_config GkeHubFeature#fleet_default_member_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#id GkeHubFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

GCP labels for this Feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#labels GkeHubFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The full, unique name of this Feature resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#name GkeHubFeature#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#project GkeHubFeature#project}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.spec"></a>

```python
spec: GkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#spec GkeHubFeature#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureConfig.property.timeouts"></a>

```python
timeouts: GkeHubFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#timeouts GkeHubFeature#timeouts}

---

### GkeHubFeatureFleetDefaultMemberConfig <a name="GkeHubFeatureFleetDefaultMemberConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig(
  configmanagement: GkeHubFeatureFleetDefaultMemberConfigConfigmanagement = None,
  mesh: GkeHubFeatureFleetDefaultMemberConfigMesh = None,
  policycontroller: GkeHubFeatureFleetDefaultMemberConfigPolicycontroller = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig.property.configmanagement">configmanagement</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a></code> | configmanagement block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig.property.mesh">mesh</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh">GkeHubFeatureFleetDefaultMemberConfigMesh</a></code> | mesh block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig.property.policycontroller">policycontroller</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller">GkeHubFeatureFleetDefaultMemberConfigPolicycontroller</a></code> | policycontroller block. |

---

##### `configmanagement`<sup>Optional</sup> <a name="configmanagement" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig.property.configmanagement"></a>

```python
configmanagement: GkeHubFeatureFleetDefaultMemberConfigConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a>

configmanagement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#configmanagement GkeHubFeature#configmanagement}

---

##### `mesh`<sup>Optional</sup> <a name="mesh" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig.property.mesh"></a>

```python
mesh: GkeHubFeatureFleetDefaultMemberConfigMesh
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh">GkeHubFeatureFleetDefaultMemberConfigMesh</a>

mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#mesh GkeHubFeature#mesh}

---

##### `policycontroller`<sup>Optional</sup> <a name="policycontroller" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig.property.policycontroller"></a>

```python
policycontroller: GkeHubFeatureFleetDefaultMemberConfigPolicycontroller
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller">GkeHubFeatureFleetDefaultMemberConfigPolicycontroller</a>

policycontroller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#policycontroller GkeHubFeature#policycontroller}

---

### GkeHubFeatureFleetDefaultMemberConfigConfigmanagement <a name="GkeHubFeatureFleetDefaultMemberConfigConfigmanagement" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement(
  config_sync: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync = None,
  management: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement.property.configSync">config_sync</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a></code> | config_sync block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement.property.management">management</a></code> | <code>str</code> | Set this field to MANAGEMENT_AUTOMATIC to enable Config Sync auto-upgrades, and set this field to MANAGEMENT_MANUAL or MANAGEMENT_UNSPECIFIED to disable Config Sync auto-upgrades. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement.property.version">version</a></code> | <code>str</code> | Version of Config Sync installed. |

---

##### `config_sync`<sup>Optional</sup> <a name="config_sync" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement.property.configSync"></a>

```python
config_sync: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a>

config_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#config_sync GkeHubFeature#config_sync}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement.property.management"></a>

```python
management: str
```

- *Type:* str

Set this field to MANAGEMENT_AUTOMATIC to enable Config Sync auto-upgrades, and set this field to MANAGEMENT_MANUAL or MANAGEMENT_UNSPECIFIED to disable Config Sync auto-upgrades.

Possible values: ["MANAGEMENT_UNSPECIFIED", "MANAGEMENT_AUTOMATIC", "MANAGEMENT_MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#management GkeHubFeature#management}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement.property.version"></a>

```python
version: str
```

- *Type:* str

Version of Config Sync installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#version GkeHubFeature#version}

---

### GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync <a name="GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync(
  enabled: typing.Union[bool, IResolvable] = None,
  git: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit = None,
  metrics_gcp_service_account_email: str = None,
  oci: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci = None,
  prevent_drift: typing.Union[bool, IResolvable] = None,
  source_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables the installation of ConfigSync. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.git">git</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a></code> | git block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.metricsGcpServiceAccountEmail">metrics_gcp_service_account_email</a></code> | <code>str</code> | The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.oci">oci</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a></code> | oci block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.preventDrift">prevent_drift</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to enable the Config Sync admission webhook to prevent drifts. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.sourceFormat">source_format</a></code> | <code>str</code> | Specifies whether the Config Sync Repo is in hierarchical or unstructured mode. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables the installation of ConfigSync.

If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of the git or oci field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#enabled GkeHubFeature#enabled}

---

##### `git`<sup>Optional</sup> <a name="git" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.git"></a>

```python
git: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#git GkeHubFeature#git}

---

##### `metrics_gcp_service_account_email`<sup>Optional</sup> <a name="metrics_gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.metricsGcpServiceAccountEmail"></a>

```python
metrics_gcp_service_account_email: str
```

- *Type:* str

The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring.

The GSA should have the Monitoring Metric Writer(roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount 'default' in the namespace 'config-management-monitoring' should be bound to the GSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#metrics_gcp_service_account_email GkeHubFeature#metrics_gcp_service_account_email}

---

##### `oci`<sup>Optional</sup> <a name="oci" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.oci"></a>

```python
oci: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a>

oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#oci GkeHubFeature#oci}

---

##### `prevent_drift`<sup>Optional</sup> <a name="prevent_drift" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.preventDrift"></a>

```python
prevent_drift: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to enable the Config Sync admission webhook to prevent drifts.

If set to 'false', disables the Config Sync admission webhook and does not prevent drifts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#prevent_drift GkeHubFeature#prevent_drift}

---

##### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

Specifies whether the Config Sync Repo is in hierarchical or unstructured mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#source_format GkeHubFeature#source_format}

---

### GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit <a name="GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit(
  secret_type: str,
  gcp_service_account_email: str = None,
  https_proxy: str = None,
  policy_dir: str = None,
  sync_branch: str = None,
  sync_repo: str = None,
  sync_rev: str = None,
  sync_wait_secs: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.secretType">secret_type</a></code> | <code>str</code> | Type of secret configured for access to the Git repo. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.httpsProxy">https_proxy</a></code> | <code>str</code> | URL for the HTTPS Proxy to be used when communicating with the Git repo. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.policyDir">policy_dir</a></code> | <code>str</code> | The path within the Git repository that represents the top level of the repo to sync. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncBranch">sync_branch</a></code> | <code>str</code> | The branch of the repository to sync from. Default: master. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncRepo">sync_repo</a></code> | <code>str</code> | The URL of the Git repository to use as the source of truth. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncRev">sync_rev</a></code> | <code>str</code> | Git revision (tag or hash) to check out. Default HEAD. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncWaitSecs">sync_wait_secs</a></code> | <code>str</code> | Period in seconds between consecutive syncs. Default: 15. |

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

Type of secret configured for access to the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#secret_type GkeHubFeature#secret_type}

---

##### `gcp_service_account_email`<sup>Optional</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#gcp_service_account_email GkeHubFeature#gcp_service_account_email}

---

##### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

URL for the HTTPS Proxy to be used when communicating with the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#https_proxy GkeHubFeature#https_proxy}

---

##### `policy_dir`<sup>Optional</sup> <a name="policy_dir" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.policyDir"></a>

```python
policy_dir: str
```

- *Type:* str

The path within the Git repository that represents the top level of the repo to sync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#policy_dir GkeHubFeature#policy_dir}

---

##### `sync_branch`<sup>Optional</sup> <a name="sync_branch" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncBranch"></a>

```python
sync_branch: str
```

- *Type:* str

The branch of the repository to sync from. Default: master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_branch GkeHubFeature#sync_branch}

---

##### `sync_repo`<sup>Optional</sup> <a name="sync_repo" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncRepo"></a>

```python
sync_repo: str
```

- *Type:* str

The URL of the Git repository to use as the source of truth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_repo GkeHubFeature#sync_repo}

---

##### `sync_rev`<sup>Optional</sup> <a name="sync_rev" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncRev"></a>

```python
sync_rev: str
```

- *Type:* str

Git revision (tag or hash) to check out. Default HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_rev GkeHubFeature#sync_rev}

---

##### `sync_wait_secs`<sup>Optional</sup> <a name="sync_wait_secs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit.property.syncWaitSecs"></a>

```python
sync_wait_secs: str
```

- *Type:* str

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_wait_secs GkeHubFeature#sync_wait_secs}

---

### GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci <a name="GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci(
  secret_type: str,
  gcp_service_account_email: str = None,
  policy_dir: str = None,
  sync_repo: str = None,
  sync_wait_secs: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.secretType">secret_type</a></code> | <code>str</code> | Type of secret configured for access to the Git repo. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.policyDir">policy_dir</a></code> | <code>str</code> | The absolute path of the directory that contains the local resources. Default: the root directory of the image. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.syncRepo">sync_repo</a></code> | <code>str</code> | The OCI image repository URL for the package to sync from. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.syncWaitSecs">sync_wait_secs</a></code> | <code>str</code> | Period in seconds between consecutive syncs. Default: 15. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.version">version</a></code> | <code>str</code> | Version of Config Sync installed. |

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

Type of secret configured for access to the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#secret_type GkeHubFeature#secret_type}

---

##### `gcp_service_account_email`<sup>Optional</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#gcp_service_account_email GkeHubFeature#gcp_service_account_email}

---

##### `policy_dir`<sup>Optional</sup> <a name="policy_dir" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.policyDir"></a>

```python
policy_dir: str
```

- *Type:* str

The absolute path of the directory that contains the local resources. Default: the root directory of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#policy_dir GkeHubFeature#policy_dir}

---

##### `sync_repo`<sup>Optional</sup> <a name="sync_repo" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.syncRepo"></a>

```python
sync_repo: str
```

- *Type:* str

The OCI image repository URL for the package to sync from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_repo GkeHubFeature#sync_repo}

---

##### `sync_wait_secs`<sup>Optional</sup> <a name="sync_wait_secs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.syncWaitSecs"></a>

```python
sync_wait_secs: str
```

- *Type:* str

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_wait_secs GkeHubFeature#sync_wait_secs}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci.property.version"></a>

```python
version: str
```

- *Type:* str

Version of Config Sync installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#version GkeHubFeature#version}

---

### GkeHubFeatureFleetDefaultMemberConfigMesh <a name="GkeHubFeatureFleetDefaultMemberConfigMesh" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh(
  management: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh.property.management">management</a></code> | <code>str</code> | Whether to automatically manage Service Mesh Possible values: ["MANAGEMENT_UNSPECIFIED", "MANAGEMENT_AUTOMATIC", "MANAGEMENT_MANUAL"]. |

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh.property.management"></a>

```python
management: str
```

- *Type:* str

Whether to automatically manage Service Mesh Possible values: ["MANAGEMENT_UNSPECIFIED", "MANAGEMENT_AUTOMATIC", "MANAGEMENT_MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#management GkeHubFeature#management}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontroller <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontroller" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller(
  policy_controller_hub_config: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller.property.policyControllerHubConfig">policy_controller_hub_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig</a></code> | policy_controller_hub_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller.property.version">version</a></code> | <code>str</code> | Configures the version of Policy Controller. |

---

##### `policy_controller_hub_config`<sup>Required</sup> <a name="policy_controller_hub_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller.property.policyControllerHubConfig"></a>

```python
policy_controller_hub_config: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig</a>

policy_controller_hub_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#policy_controller_hub_config GkeHubFeature#policy_controller_hub_config}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller.property.version"></a>

```python
version: str
```

- *Type:* str

Configures the version of Policy Controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#version GkeHubFeature#version}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig(
  install_spec: str,
  audit_interval_seconds: typing.Union[int, float] = None,
  constraint_violation_limit: typing.Union[int, float] = None,
  deployment_configs: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs]] = None,
  exemptable_namespaces: typing.List[str] = None,
  log_denies_enabled: typing.Union[bool, IResolvable] = None,
  monitoring: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring = None,
  mutation_enabled: typing.Union[bool, IResolvable] = None,
  policy_content: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent = None,
  referential_rules_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.installSpec">install_spec</a></code> | <code>str</code> | Configures the mode of the Policy Controller installation Possible values: ["INSTALL_SPEC_UNSPECIFIED", "INSTALL_SPEC_NOT_INSTALLED", "INSTALL_SPEC_ENABLED", "INSTALL_SPEC_SUSPENDED", "INSTALL_SPEC_DETACHED"]. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.auditIntervalSeconds">audit_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Interval for Policy Controller Audit scans (in seconds). When set to 0, this disables audit functionality altogether. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.constraintViolationLimit">constraint_violation_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum number of audit violations to be stored in a constraint. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.deploymentConfigs">deployment_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>]]</code> | deployment_configs block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.exemptableNamespaces">exemptable_namespaces</a></code> | <code>typing.List[str]</code> | The set of namespaces that are excluded from Policy Controller checks. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.logDeniesEnabled">log_denies_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Logs all denies and dry run failures. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.mutationEnabled">mutation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables the ability to mutate resources using Policy Controller. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.policyContent">policy_content</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent</a></code> | policy_content block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.referentialRulesEnabled">referential_rules_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. |

---

##### `install_spec`<sup>Required</sup> <a name="install_spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.installSpec"></a>

```python
install_spec: str
```

- *Type:* str

Configures the mode of the Policy Controller installation Possible values: ["INSTALL_SPEC_UNSPECIFIED", "INSTALL_SPEC_NOT_INSTALLED", "INSTALL_SPEC_ENABLED", "INSTALL_SPEC_SUSPENDED", "INSTALL_SPEC_DETACHED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#install_spec GkeHubFeature#install_spec}

---

##### `audit_interval_seconds`<sup>Optional</sup> <a name="audit_interval_seconds" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.auditIntervalSeconds"></a>

```python
audit_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Interval for Policy Controller Audit scans (in seconds). When set to 0, this disables audit functionality altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#audit_interval_seconds GkeHubFeature#audit_interval_seconds}

---

##### `constraint_violation_limit`<sup>Optional</sup> <a name="constraint_violation_limit" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.constraintViolationLimit"></a>

```python
constraint_violation_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of audit violations to be stored in a constraint.

If not set, the internal default of 20 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#constraint_violation_limit GkeHubFeature#constraint_violation_limit}

---

##### `deployment_configs`<sup>Optional</sup> <a name="deployment_configs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.deploymentConfigs"></a>

```python
deployment_configs: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>]]

deployment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#deployment_configs GkeHubFeature#deployment_configs}

---

##### `exemptable_namespaces`<sup>Optional</sup> <a name="exemptable_namespaces" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.exemptableNamespaces"></a>

```python
exemptable_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

The set of namespaces that are excluded from Policy Controller checks.

Namespaces do not need to currently exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#exemptable_namespaces GkeHubFeature#exemptable_namespaces}

---

##### `log_denies_enabled`<sup>Optional</sup> <a name="log_denies_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.logDeniesEnabled"></a>

```python
log_denies_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Logs all denies and dry run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#log_denies_enabled GkeHubFeature#log_denies_enabled}

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.monitoring"></a>

```python
monitoring: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#monitoring GkeHubFeature#monitoring}

---

##### `mutation_enabled`<sup>Optional</sup> <a name="mutation_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.mutationEnabled"></a>

```python
mutation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables the ability to mutate resources using Policy Controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#mutation_enabled GkeHubFeature#mutation_enabled}

---

##### `policy_content`<sup>Optional</sup> <a name="policy_content" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.policyContent"></a>

```python
policy_content: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent</a>

policy_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#policy_content GkeHubFeature#policy_content}

---

##### `referential_rules_enabled`<sup>Optional</sup> <a name="referential_rules_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig.property.referentialRulesEnabled"></a>

```python
referential_rules_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#referential_rules_enabled GkeHubFeature#referential_rules_enabled}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs(
  component: str,
  container_resources: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources = None,
  pod_affinity: str = None,
  pod_toleration: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration]] = None,
  replica_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.component">component</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#component GkeHubFeature#component}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.containerResources">container_resources</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a></code> | container_resources block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.podAffinity">pod_affinity</a></code> | <code>str</code> | Pod affinity configuration. Possible values: ["AFFINITY_UNSPECIFIED", "NO_AFFINITY", "ANTI_AFFINITY"]. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.podToleration">pod_toleration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration</a>]]</code> | pod_toleration block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | Pod replica count. |

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.component"></a>

```python
component: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#component GkeHubFeature#component}.

---

##### `container_resources`<sup>Optional</sup> <a name="container_resources" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.containerResources"></a>

```python
container_resources: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a>

container_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#container_resources GkeHubFeature#container_resources}

---

##### `pod_affinity`<sup>Optional</sup> <a name="pod_affinity" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.podAffinity"></a>

```python
pod_affinity: str
```

- *Type:* str

Pod affinity configuration. Possible values: ["AFFINITY_UNSPECIFIED", "NO_AFFINITY", "ANTI_AFFINITY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#pod_affinity GkeHubFeature#pod_affinity}

---

##### `pod_toleration`<sup>Optional</sup> <a name="pod_toleration" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.podToleration"></a>

```python
pod_toleration: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration</a>]]

pod_toleration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#pod_toleration GkeHubFeature#pod_toleration}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Pod replica count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#replica_count GkeHubFeature#replica_count}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources(
  limits: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits = None,
  requests: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a></code> | requests block. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources.property.limits"></a>

```python
limits: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#limits GkeHubFeature#limits}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources.property.requests"></a>

```python
requests: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a>

requests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#requests GkeHubFeature#requests}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits(
  cpu: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits.property.cpu">cpu</a></code> | <code>str</code> | CPU requirement expressed in Kubernetes resource units. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits.property.memory">memory</a></code> | <code>str</code> | Memory requirement expressed in Kubernetes resource units. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

CPU requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#cpu GkeHubFeature#cpu}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits.property.memory"></a>

```python
memory: str
```

- *Type:* str

Memory requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#memory GkeHubFeature#memory}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests(
  cpu: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests.property.cpu">cpu</a></code> | <code>str</code> | CPU requirement expressed in Kubernetes resource units. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests.property.memory">memory</a></code> | <code>str</code> | Memory requirement expressed in Kubernetes resource units. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

CPU requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#cpu GkeHubFeature#cpu}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests.property.memory"></a>

```python
memory: str
```

- *Type:* str

Memory requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#memory GkeHubFeature#memory}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration(
  effect: str = None,
  key: str = None,
  operator: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration.property.effect">effect</a></code> | <code>str</code> | Matches a taint effect. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration.property.key">key</a></code> | <code>str</code> | Matches a taint key (not necessarily unique). |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration.property.operator">operator</a></code> | <code>str</code> | Matches a taint operator. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration.property.value">value</a></code> | <code>str</code> | Matches a taint value. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration.property.effect"></a>

```python
effect: str
```

- *Type:* str

Matches a taint effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#effect GkeHubFeature#effect}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration.property.key"></a>

```python
key: str
```

- *Type:* str

Matches a taint key (not necessarily unique).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#key GkeHubFeature#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration.property.operator"></a>

```python
operator: str
```

- *Type:* str

Matches a taint operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#operator GkeHubFeature#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration.property.value"></a>

```python
value: str
```

- *Type:* str

Matches a taint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#value GkeHubFeature#value}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring(
  backends: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring.property.backends">backends</a></code> | <code>typing.List[str]</code> | Specifies the list of backends Policy Controller will export to. |

---

##### `backends`<sup>Optional</sup> <a name="backends" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring.property.backends"></a>

```python
backends: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of backends Policy Controller will export to.

An empty list would effectively disable metrics export. Possible values: ["MONITORING_BACKEND_UNSPECIFIED", "PROMETHEUS", "CLOUD_MONITORING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#backends GkeHubFeature#backends}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent(
  bundles: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles]] = None,
  template_library: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent.property.bundles">bundles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>]]</code> | bundles block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent.property.templateLibrary">template_library</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a></code> | template_library block. |

---

##### `bundles`<sup>Optional</sup> <a name="bundles" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent.property.bundles"></a>

```python
bundles: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>]]

bundles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#bundles GkeHubFeature#bundles}

---

##### `template_library`<sup>Optional</sup> <a name="template_library" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent.property.templateLibrary"></a>

```python
template_library: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a>

template_library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#template_library GkeHubFeature#template_library}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles(
  bundle: str,
  exempted_namespaces: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles.property.bundle">bundle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#bundle GkeHubFeature#bundle}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles.property.exemptedNamespaces">exempted_namespaces</a></code> | <code>typing.List[str]</code> | The set of namespaces to be exempted from the bundle. |

---

##### `bundle`<sup>Required</sup> <a name="bundle" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles.property.bundle"></a>

```python
bundle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#bundle GkeHubFeature#bundle}.

---

##### `exempted_namespaces`<sup>Optional</sup> <a name="exempted_namespaces" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles.property.exemptedNamespaces"></a>

```python
exempted_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

The set of namespaces to be exempted from the bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#exempted_namespaces GkeHubFeature#exempted_namespaces}

---

### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary(
  installation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary.property.installation">installation</a></code> | <code>str</code> | Configures the manner in which the template library is installed on the cluster. Possible values: ["INSTALLATION_UNSPECIFIED", "NOT_INSTALLED", "ALL"]. |

---

##### `installation`<sup>Optional</sup> <a name="installation" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary.property.installation"></a>

```python
installation: str
```

- *Type:* str

Configures the manner in which the template library is installed on the cluster. Possible values: ["INSTALLATION_UNSPECIFIED", "NOT_INSTALLED", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#installation GkeHubFeature#installation}

---

### GkeHubFeatureResourceState <a name="GkeHubFeatureResourceState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureResourceState()
```


### GkeHubFeatureSpec <a name="GkeHubFeatureSpec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpec(
  clusterupgrade: GkeHubFeatureSpecClusterupgrade = None,
  fleetobservability: GkeHubFeatureSpecFleetobservability = None,
  multiclusteringress: GkeHubFeatureSpecMulticlusteringress = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.clusterupgrade">clusterupgrade</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade">GkeHubFeatureSpecClusterupgrade</a></code> | clusterupgrade block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.fleetobservability">fleetobservability</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a></code> | fleetobservability block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.multiclusteringress">multiclusteringress</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a></code> | multiclusteringress block. |

---

##### `clusterupgrade`<sup>Optional</sup> <a name="clusterupgrade" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.clusterupgrade"></a>

```python
clusterupgrade: GkeHubFeatureSpecClusterupgrade
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade">GkeHubFeatureSpecClusterupgrade</a>

clusterupgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#clusterupgrade GkeHubFeature#clusterupgrade}

---

##### `fleetobservability`<sup>Optional</sup> <a name="fleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.fleetobservability"></a>

```python
fleetobservability: GkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

fleetobservability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#fleetobservability GkeHubFeature#fleetobservability}

---

##### `multiclusteringress`<sup>Optional</sup> <a name="multiclusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec.property.multiclusteringress"></a>

```python
multiclusteringress: GkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

multiclusteringress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#multiclusteringress GkeHubFeature#multiclusteringress}

---

### GkeHubFeatureSpecClusterupgrade <a name="GkeHubFeatureSpecClusterupgrade" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgrade(
  upstream_fleets: typing.List[str],
  gke_upgrade_overrides: typing.Union[IResolvable, typing.List[GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides]] = None,
  post_conditions: GkeHubFeatureSpecClusterupgradePostConditions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade.property.upstreamFleets">upstream_fleets</a></code> | <code>typing.List[str]</code> | Specified if other fleet should be considered as a source of upgrades. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade.property.gkeUpgradeOverrides">gke_upgrade_overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides</a>]]</code> | gke_upgrade_overrides block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade.property.postConditions">post_conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions">GkeHubFeatureSpecClusterupgradePostConditions</a></code> | post_conditions block. |

---

##### `upstream_fleets`<sup>Required</sup> <a name="upstream_fleets" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade.property.upstreamFleets"></a>

```python
upstream_fleets: typing.List[str]
```

- *Type:* typing.List[str]

Specified if other fleet should be considered as a source of upgrades.

Currently, at most one upstream fleet is allowed. The fleet name should be either fleet project number or id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#upstream_fleets GkeHubFeature#upstream_fleets}

---

##### `gke_upgrade_overrides`<sup>Optional</sup> <a name="gke_upgrade_overrides" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade.property.gkeUpgradeOverrides"></a>

```python
gke_upgrade_overrides: typing.Union[IResolvable, typing.List[GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides</a>]]

gke_upgrade_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#gke_upgrade_overrides GkeHubFeature#gke_upgrade_overrides}

---

##### `post_conditions`<sup>Optional</sup> <a name="post_conditions" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade.property.postConditions"></a>

```python
post_conditions: GkeHubFeatureSpecClusterupgradePostConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions">GkeHubFeatureSpecClusterupgradePostConditions</a>

post_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#post_conditions GkeHubFeature#post_conditions}

---

### GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides <a name="GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides(
  post_conditions: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions,
  upgrade: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides.property.postConditions">post_conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions</a></code> | post_conditions block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides.property.upgrade">upgrade</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade</a></code> | upgrade block. |

---

##### `post_conditions`<sup>Required</sup> <a name="post_conditions" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides.property.postConditions"></a>

```python
post_conditions: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions</a>

post_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#post_conditions GkeHubFeature#post_conditions}

---

##### `upgrade`<sup>Required</sup> <a name="upgrade" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides.property.upgrade"></a>

```python
upgrade: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade</a>

upgrade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#upgrade GkeHubFeature#upgrade}

---

### GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions <a name="GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions(
  soaking: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions.property.soaking">soaking</a></code> | <code>str</code> | Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days. |

---

##### `soaking`<sup>Required</sup> <a name="soaking" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions.property.soaking"></a>

```python
soaking: str
```

- *Type:* str

Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#soaking GkeHubFeature#soaking}

---

### GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade <a name="GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade(
  name: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade.property.name">name</a></code> | <code>str</code> | Name of the upgrade, e.g., "k8s_control_plane". It should be a valid upgrade name. It must not exceet 99 characters. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade.property.version">version</a></code> | <code>str</code> | Version of the upgrade, e.g., "1.22.1-gke.100". It should be a valid version. It must not exceet 99 characters. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the upgrade, e.g., "k8s_control_plane". It should be a valid upgrade name. It must not exceet 99 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#name GkeHubFeature#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the upgrade, e.g., "1.22.1-gke.100". It should be a valid version. It must not exceet 99 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#version GkeHubFeature#version}

---

### GkeHubFeatureSpecClusterupgradePostConditions <a name="GkeHubFeatureSpecClusterupgradePostConditions" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions(
  soaking: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions.property.soaking">soaking</a></code> | <code>str</code> | Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days. |

---

##### `soaking`<sup>Required</sup> <a name="soaking" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions.property.soaking"></a>

```python
soaking: str
```

- *Type:* str

Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#soaking GkeHubFeature#soaking}

---

### GkeHubFeatureSpecFleetobservability <a name="GkeHubFeatureSpecFleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecFleetobservability(
  logging_config: GkeHubFeatureSpecFleetobservabilityLoggingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | logging_config block. |

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability.property.loggingConfig"></a>

```python
logging_config: GkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#logging_config GkeHubFeature#logging_config}

---

### GkeHubFeatureSpecFleetobservabilityLoggingConfig <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig(
  default_config: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig = None,
  fleet_scope_logs_config: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.defaultConfig">default_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | default_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.fleetScopeLogsConfig">fleet_scope_logs_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | fleet_scope_logs_config block. |

---

##### `default_config`<sup>Optional</sup> <a name="default_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.defaultConfig"></a>

```python
default_config: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

default_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#default_config GkeHubFeature#default_config}

---

##### `fleet_scope_logs_config`<sup>Optional</sup> <a name="fleet_scope_logs_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig.property.fleetScopeLogsConfig"></a>

```python
fleet_scope_logs_config: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

fleet_scope_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#fleet_scope_logs_config GkeHubFeature#fleet_scope_logs_config}

---

### GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.property.mode">mode</a></code> | <code>str</code> | Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#mode GkeHubFeature#mode}

---

### GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.property.mode">mode</a></code> | <code>str</code> | Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#mode GkeHubFeature#mode}

---

### GkeHubFeatureSpecMulticlusteringress <a name="GkeHubFeatureSpecMulticlusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecMulticlusteringress(
  config_membership: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress.property.configMembership">config_membership</a></code> | <code>str</code> | Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'. |

---

##### `config_membership`<sup>Required</sup> <a name="config_membership" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress.property.configMembership"></a>

```python
config_membership: str
```

- *Type:* str

Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#config_membership GkeHubFeature#config_membership}

---

### GkeHubFeatureState <a name="GkeHubFeatureState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureState()
```


### GkeHubFeatureStateState <a name="GkeHubFeatureStateState" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureStateState()
```


### GkeHubFeatureTimeouts <a name="GkeHubFeatureTimeouts" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#create GkeHubFeature#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#delete GkeHubFeature#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#update GkeHubFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#create GkeHubFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#delete GkeHubFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#update GkeHubFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail">reset_gcp_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy">reset_https_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetPolicyDir">reset_policy_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncBranch">reset_sync_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncRepo">reset_sync_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncRev">reset_sync_rev</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs">reset_sync_wait_secs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gcp_service_account_email` <a name="reset_gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetGcpServiceAccountEmail"></a>

```python
def reset_gcp_service_account_email() -> None
```

##### `reset_https_proxy` <a name="reset_https_proxy" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetHttpsProxy"></a>

```python
def reset_https_proxy() -> None
```

##### `reset_policy_dir` <a name="reset_policy_dir" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetPolicyDir"></a>

```python
def reset_policy_dir() -> None
```

##### `reset_sync_branch` <a name="reset_sync_branch" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncBranch"></a>

```python
def reset_sync_branch() -> None
```

##### `reset_sync_repo` <a name="reset_sync_repo" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncRepo"></a>

```python
def reset_sync_repo() -> None
```

##### `reset_sync_rev` <a name="reset_sync_rev" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncRev"></a>

```python
def reset_sync_rev() -> None
```

##### `reset_sync_wait_secs` <a name="reset_sync_wait_secs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.resetSyncWaitSecs"></a>

```python
def reset_sync_wait_secs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput">gcp_service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput">https_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.policyDirInput">policy_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput">secret_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput">sync_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput">sync_repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRevInput">sync_rev_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput">sync_wait_secs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.httpsProxy">https_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.policyDir">policy_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncBranch">sync_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRepo">sync_repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRev">sync_rev</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs">sync_wait_secs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcp_service_account_email_input`<sup>Optional</sup> <a name="gcp_service_account_email_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmailInput"></a>

```python
gcp_service_account_email_input: str
```

- *Type:* str

---

##### `https_proxy_input`<sup>Optional</sup> <a name="https_proxy_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.httpsProxyInput"></a>

```python
https_proxy_input: str
```

- *Type:* str

---

##### `policy_dir_input`<sup>Optional</sup> <a name="policy_dir_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.policyDirInput"></a>

```python
policy_dir_input: str
```

- *Type:* str

---

##### `secret_type_input`<sup>Optional</sup> <a name="secret_type_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.secretTypeInput"></a>

```python
secret_type_input: str
```

- *Type:* str

---

##### `sync_branch_input`<sup>Optional</sup> <a name="sync_branch_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncBranchInput"></a>

```python
sync_branch_input: str
```

- *Type:* str

---

##### `sync_repo_input`<sup>Optional</sup> <a name="sync_repo_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRepoInput"></a>

```python
sync_repo_input: str
```

- *Type:* str

---

##### `sync_rev_input`<sup>Optional</sup> <a name="sync_rev_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRevInput"></a>

```python
sync_rev_input: str
```

- *Type:* str

---

##### `sync_wait_secs_input`<sup>Optional</sup> <a name="sync_wait_secs_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecsInput"></a>

```python
sync_wait_secs_input: str
```

- *Type:* str

---

##### `gcp_service_account_email`<sup>Required</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

---

##### `https_proxy`<sup>Required</sup> <a name="https_proxy" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

---

##### `policy_dir`<sup>Required</sup> <a name="policy_dir" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.policyDir"></a>

```python
policy_dir: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `sync_branch`<sup>Required</sup> <a name="sync_branch" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncBranch"></a>

```python
sync_branch: str
```

- *Type:* str

---

##### `sync_repo`<sup>Required</sup> <a name="sync_repo" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRepo"></a>

```python
sync_repo: str
```

- *Type:* str

---

##### `sync_rev`<sup>Required</sup> <a name="sync_rev" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncRev"></a>

```python
sync_rev: str
```

- *Type:* str

---

##### `sync_wait_secs`<sup>Required</sup> <a name="sync_wait_secs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.syncWaitSecs"></a>

```python
sync_wait_secs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a>

---


### GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail">reset_gcp_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetPolicyDir">reset_policy_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetSyncRepo">reset_sync_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs">reset_sync_wait_secs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gcp_service_account_email` <a name="reset_gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetGcpServiceAccountEmail"></a>

```python
def reset_gcp_service_account_email() -> None
```

##### `reset_policy_dir` <a name="reset_policy_dir" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetPolicyDir"></a>

```python
def reset_policy_dir() -> None
```

##### `reset_sync_repo` <a name="reset_sync_repo" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetSyncRepo"></a>

```python
def reset_sync_repo() -> None
```

##### `reset_sync_wait_secs` <a name="reset_sync_wait_secs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetSyncWaitSecs"></a>

```python
def reset_sync_wait_secs() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput">gcp_service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.policyDirInput">policy_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput">secret_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput">sync_repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput">sync_wait_secs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.policyDir">policy_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncRepo">sync_repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs">sync_wait_secs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcp_service_account_email_input`<sup>Optional</sup> <a name="gcp_service_account_email_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmailInput"></a>

```python
gcp_service_account_email_input: str
```

- *Type:* str

---

##### `policy_dir_input`<sup>Optional</sup> <a name="policy_dir_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.policyDirInput"></a>

```python
policy_dir_input: str
```

- *Type:* str

---

##### `secret_type_input`<sup>Optional</sup> <a name="secret_type_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.secretTypeInput"></a>

```python
secret_type_input: str
```

- *Type:* str

---

##### `sync_repo_input`<sup>Optional</sup> <a name="sync_repo_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncRepoInput"></a>

```python
sync_repo_input: str
```

- *Type:* str

---

##### `sync_wait_secs_input`<sup>Optional</sup> <a name="sync_wait_secs_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecsInput"></a>

```python
sync_wait_secs_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `gcp_service_account_email`<sup>Required</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

---

##### `policy_dir`<sup>Required</sup> <a name="policy_dir" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.policyDir"></a>

```python
policy_dir: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `sync_repo`<sup>Required</sup> <a name="sync_repo" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncRepo"></a>

```python
sync_repo: str
```

- *Type:* str

---

##### `sync_wait_secs`<sup>Required</sup> <a name="sync_wait_secs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.syncWaitSecs"></a>

```python
sync_wait_secs: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a>

---


### GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit">put_git</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci">put_oci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetGit">reset_git</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetMetricsGcpServiceAccountEmail">reset_metrics_gcp_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetOci">reset_oci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetPreventDrift">reset_prevent_drift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetSourceFormat">reset_source_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_git` <a name="put_git" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit"></a>

```python
def put_git(
  secret_type: str,
  gcp_service_account_email: str = None,
  https_proxy: str = None,
  policy_dir: str = None,
  sync_branch: str = None,
  sync_repo: str = None,
  sync_rev: str = None,
  sync_wait_secs: str = None
) -> None
```

###### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.secretType"></a>

- *Type:* str

Type of secret configured for access to the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#secret_type GkeHubFeature#secret_type}

---

###### `gcp_service_account_email`<sup>Optional</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.gcpServiceAccountEmail"></a>

- *Type:* str

The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#gcp_service_account_email GkeHubFeature#gcp_service_account_email}

---

###### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.httpsProxy"></a>

- *Type:* str

URL for the HTTPS Proxy to be used when communicating with the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#https_proxy GkeHubFeature#https_proxy}

---

###### `policy_dir`<sup>Optional</sup> <a name="policy_dir" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.policyDir"></a>

- *Type:* str

The path within the Git repository that represents the top level of the repo to sync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#policy_dir GkeHubFeature#policy_dir}

---

###### `sync_branch`<sup>Optional</sup> <a name="sync_branch" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.syncBranch"></a>

- *Type:* str

The branch of the repository to sync from. Default: master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_branch GkeHubFeature#sync_branch}

---

###### `sync_repo`<sup>Optional</sup> <a name="sync_repo" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.syncRepo"></a>

- *Type:* str

The URL of the Git repository to use as the source of truth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_repo GkeHubFeature#sync_repo}

---

###### `sync_rev`<sup>Optional</sup> <a name="sync_rev" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.syncRev"></a>

- *Type:* str

Git revision (tag or hash) to check out. Default HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_rev GkeHubFeature#sync_rev}

---

###### `sync_wait_secs`<sup>Optional</sup> <a name="sync_wait_secs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putGit.parameter.syncWaitSecs"></a>

- *Type:* str

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_wait_secs GkeHubFeature#sync_wait_secs}

---

##### `put_oci` <a name="put_oci" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci"></a>

```python
def put_oci(
  secret_type: str,
  gcp_service_account_email: str = None,
  policy_dir: str = None,
  sync_repo: str = None,
  sync_wait_secs: str = None,
  version: str = None
) -> None
```

###### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.secretType"></a>

- *Type:* str

Type of secret configured for access to the Git repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#secret_type GkeHubFeature#secret_type}

---

###### `gcp_service_account_email`<sup>Optional</sup> <a name="gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.gcpServiceAccountEmail"></a>

- *Type:* str

The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#gcp_service_account_email GkeHubFeature#gcp_service_account_email}

---

###### `policy_dir`<sup>Optional</sup> <a name="policy_dir" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.policyDir"></a>

- *Type:* str

The absolute path of the directory that contains the local resources. Default: the root directory of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#policy_dir GkeHubFeature#policy_dir}

---

###### `sync_repo`<sup>Optional</sup> <a name="sync_repo" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.syncRepo"></a>

- *Type:* str

The OCI image repository URL for the package to sync from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_repo GkeHubFeature#sync_repo}

---

###### `sync_wait_secs`<sup>Optional</sup> <a name="sync_wait_secs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.syncWaitSecs"></a>

- *Type:* str

Period in seconds between consecutive syncs. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#sync_wait_secs GkeHubFeature#sync_wait_secs}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.putOci.parameter.version"></a>

- *Type:* str

Version of Config Sync installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#version GkeHubFeature#version}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_git` <a name="reset_git" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetGit"></a>

```python
def reset_git() -> None
```

##### `reset_metrics_gcp_service_account_email` <a name="reset_metrics_gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetMetricsGcpServiceAccountEmail"></a>

```python
def reset_metrics_gcp_service_account_email() -> None
```

##### `reset_oci` <a name="reset_oci" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetOci"></a>

```python
def reset_oci() -> None
```

##### `reset_prevent_drift` <a name="reset_prevent_drift" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetPreventDrift"></a>

```python
def reset_prevent_drift() -> None
```

##### `reset_source_format` <a name="reset_source_format" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.resetSourceFormat"></a>

```python
def reset_source_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.git">git</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.oci">oci</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.gitInput">git_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.metricsGcpServiceAccountEmailInput">metrics_gcp_service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.ociInput">oci_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.preventDriftInput">prevent_drift_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.sourceFormatInput">source_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.metricsGcpServiceAccountEmail">metrics_gcp_service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.preventDrift">prevent_drift</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.sourceFormat">source_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git`<sup>Required</sup> <a name="git" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.git"></a>

```python
git: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference</a>

---

##### `oci`<sup>Required</sup> <a name="oci" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.oci"></a>

```python
oci: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `git_input`<sup>Optional</sup> <a name="git_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.gitInput"></a>

```python
git_input: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a>

---

##### `metrics_gcp_service_account_email_input`<sup>Optional</sup> <a name="metrics_gcp_service_account_email_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.metricsGcpServiceAccountEmailInput"></a>

```python
metrics_gcp_service_account_email_input: str
```

- *Type:* str

---

##### `oci_input`<sup>Optional</sup> <a name="oci_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.ociInput"></a>

```python
oci_input: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a>

---

##### `prevent_drift_input`<sup>Optional</sup> <a name="prevent_drift_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.preventDriftInput"></a>

```python
prevent_drift_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_format_input`<sup>Optional</sup> <a name="source_format_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.sourceFormatInput"></a>

```python
source_format_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metrics_gcp_service_account_email`<sup>Required</sup> <a name="metrics_gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.metricsGcpServiceAccountEmail"></a>

```python
metrics_gcp_service_account_email: str
```

- *Type:* str

---

##### `prevent_drift`<sup>Required</sup> <a name="prevent_drift" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.preventDrift"></a>

```python
prevent_drift: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_format`<sup>Required</sup> <a name="source_format" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.sourceFormat"></a>

```python
source_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a>

---


### GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync">put_config_sync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resetConfigSync">reset_config_sync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resetManagement">reset_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config_sync` <a name="put_config_sync" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync"></a>

```python
def put_config_sync(
  enabled: typing.Union[bool, IResolvable] = None,
  git: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit = None,
  metrics_gcp_service_account_email: str = None,
  oci: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci = None,
  prevent_drift: typing.Union[bool, IResolvable] = None,
  source_format: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables the installation of ConfigSync.

If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of the git or oci field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#enabled GkeHubFeature#enabled}

---

###### `git`<sup>Optional</sup> <a name="git" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync.parameter.git"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#git GkeHubFeature#git}

---

###### `metrics_gcp_service_account_email`<sup>Optional</sup> <a name="metrics_gcp_service_account_email" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync.parameter.metricsGcpServiceAccountEmail"></a>

- *Type:* str

The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring.

The GSA should have the Monitoring Metric Writer(roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount 'default' in the namespace 'config-management-monitoring' should be bound to the GSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#metrics_gcp_service_account_email GkeHubFeature#metrics_gcp_service_account_email}

---

###### `oci`<sup>Optional</sup> <a name="oci" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync.parameter.oci"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci</a>

oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#oci GkeHubFeature#oci}

---

###### `prevent_drift`<sup>Optional</sup> <a name="prevent_drift" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync.parameter.preventDrift"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to enable the Config Sync admission webhook to prevent drifts.

If set to 'false', disables the Config Sync admission webhook and does not prevent drifts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#prevent_drift GkeHubFeature#prevent_drift}

---

###### `source_format`<sup>Optional</sup> <a name="source_format" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.putConfigSync.parameter.sourceFormat"></a>

- *Type:* str

Specifies whether the Config Sync Repo is in hierarchical or unstructured mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#source_format GkeHubFeature#source_format}

---

##### `reset_config_sync` <a name="reset_config_sync" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resetConfigSync"></a>

```python
def reset_config_sync() -> None
```

##### `reset_management` <a name="reset_management" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resetManagement"></a>

```python
def reset_management() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.configSync">config_sync</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.configSyncInput">config_sync_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.managementInput">management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.management">management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_sync`<sup>Required</sup> <a name="config_sync" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.configSync"></a>

```python
config_sync: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference</a>

---

##### `config_sync_input`<sup>Optional</sup> <a name="config_sync_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.configSyncInput"></a>

```python
config_sync_input: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a>

---

##### `management_input`<sup>Optional</sup> <a name="management_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.managementInput"></a>

```python
management_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.management"></a>

```python
management: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a>

---


### GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.managementInput">management_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.management">management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh">GkeHubFeatureFleetDefaultMemberConfigMesh</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `management_input`<sup>Optional</sup> <a name="management_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.managementInput"></a>

```python
management_input: str
```

- *Type:* str

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.management"></a>

```python
management: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigMesh
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh">GkeHubFeatureFleetDefaultMemberConfigMesh</a>

---


### GkeHubFeatureFleetDefaultMemberConfigOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putConfigmanagement">put_configmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putMesh">put_mesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putPolicycontroller">put_policycontroller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.resetConfigmanagement">reset_configmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.resetMesh">reset_mesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.resetPolicycontroller">reset_policycontroller</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configmanagement` <a name="put_configmanagement" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putConfigmanagement"></a>

```python
def put_configmanagement(
  config_sync: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync = None,
  management: str = None,
  version: str = None
) -> None
```

###### `config_sync`<sup>Optional</sup> <a name="config_sync" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putConfigmanagement.parameter.configSync"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync</a>

config_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#config_sync GkeHubFeature#config_sync}

---

###### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putConfigmanagement.parameter.management"></a>

- *Type:* str

Set this field to MANAGEMENT_AUTOMATIC to enable Config Sync auto-upgrades, and set this field to MANAGEMENT_MANUAL or MANAGEMENT_UNSPECIFIED to disable Config Sync auto-upgrades.

Possible values: ["MANAGEMENT_UNSPECIFIED", "MANAGEMENT_AUTOMATIC", "MANAGEMENT_MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#management GkeHubFeature#management}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putConfigmanagement.parameter.version"></a>

- *Type:* str

Version of Config Sync installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#version GkeHubFeature#version}

---

##### `put_mesh` <a name="put_mesh" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putMesh"></a>

```python
def put_mesh(
  management: str
) -> None
```

###### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putMesh.parameter.management"></a>

- *Type:* str

Whether to automatically manage Service Mesh Possible values: ["MANAGEMENT_UNSPECIFIED", "MANAGEMENT_AUTOMATIC", "MANAGEMENT_MANUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#management GkeHubFeature#management}

---

##### `put_policycontroller` <a name="put_policycontroller" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putPolicycontroller"></a>

```python
def put_policycontroller(
  policy_controller_hub_config: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig,
  version: str = None
) -> None
```

###### `policy_controller_hub_config`<sup>Required</sup> <a name="policy_controller_hub_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putPolicycontroller.parameter.policyControllerHubConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig</a>

policy_controller_hub_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#policy_controller_hub_config GkeHubFeature#policy_controller_hub_config}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.putPolicycontroller.parameter.version"></a>

- *Type:* str

Configures the version of Policy Controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#version GkeHubFeature#version}

---

##### `reset_configmanagement` <a name="reset_configmanagement" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.resetConfigmanagement"></a>

```python
def reset_configmanagement() -> None
```

##### `reset_mesh` <a name="reset_mesh" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.resetMesh"></a>

```python
def reset_mesh() -> None
```

##### `reset_policycontroller` <a name="reset_policycontroller" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.resetPolicycontroller"></a>

```python
def reset_policycontroller() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.configmanagement">configmanagement</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.mesh">mesh</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference">GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.policycontroller">policycontroller</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.configmanagementInput">configmanagement_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.meshInput">mesh_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh">GkeHubFeatureFleetDefaultMemberConfigMesh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.policycontrollerInput">policycontroller_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller">GkeHubFeatureFleetDefaultMemberConfigPolicycontroller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig">GkeHubFeatureFleetDefaultMemberConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configmanagement`<sup>Required</sup> <a name="configmanagement" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.configmanagement"></a>

```python
configmanagement: GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference">GkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference</a>

---

##### `mesh`<sup>Required</sup> <a name="mesh" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.mesh"></a>

```python
mesh: GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference">GkeHubFeatureFleetDefaultMemberConfigMeshOutputReference</a>

---

##### `policycontroller`<sup>Required</sup> <a name="policycontroller" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.policycontroller"></a>

```python
policycontroller: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference</a>

---

##### `configmanagement_input`<sup>Optional</sup> <a name="configmanagement_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.configmanagementInput"></a>

```python
configmanagement_input: GkeHubFeatureFleetDefaultMemberConfigConfigmanagement
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigConfigmanagement">GkeHubFeatureFleetDefaultMemberConfigConfigmanagement</a>

---

##### `mesh_input`<sup>Optional</sup> <a name="mesh_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.meshInput"></a>

```python
mesh_input: GkeHubFeatureFleetDefaultMemberConfigMesh
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigMesh">GkeHubFeatureFleetDefaultMemberConfigMesh</a>

---

##### `policycontroller_input`<sup>Optional</sup> <a name="policycontroller_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.policycontrollerInput"></a>

```python
policycontroller_input: GkeHubFeatureFleetDefaultMemberConfigPolicycontroller
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller">GkeHubFeatureFleetDefaultMemberConfigPolicycontroller</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfig">GkeHubFeatureFleetDefaultMemberConfig</a>

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig">put_policy_controller_hub_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policy_controller_hub_config` <a name="put_policy_controller_hub_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig"></a>

```python
def put_policy_controller_hub_config(
  install_spec: str,
  audit_interval_seconds: typing.Union[int, float] = None,
  constraint_violation_limit: typing.Union[int, float] = None,
  deployment_configs: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs]] = None,
  exemptable_namespaces: typing.List[str] = None,
  log_denies_enabled: typing.Union[bool, IResolvable] = None,
  monitoring: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring = None,
  mutation_enabled: typing.Union[bool, IResolvable] = None,
  policy_content: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent = None,
  referential_rules_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `install_spec`<sup>Required</sup> <a name="install_spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.installSpec"></a>

- *Type:* str

Configures the mode of the Policy Controller installation Possible values: ["INSTALL_SPEC_UNSPECIFIED", "INSTALL_SPEC_NOT_INSTALLED", "INSTALL_SPEC_ENABLED", "INSTALL_SPEC_SUSPENDED", "INSTALL_SPEC_DETACHED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#install_spec GkeHubFeature#install_spec}

---

###### `audit_interval_seconds`<sup>Optional</sup> <a name="audit_interval_seconds" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.auditIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Interval for Policy Controller Audit scans (in seconds). When set to 0, this disables audit functionality altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#audit_interval_seconds GkeHubFeature#audit_interval_seconds}

---

###### `constraint_violation_limit`<sup>Optional</sup> <a name="constraint_violation_limit" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.constraintViolationLimit"></a>

- *Type:* typing.Union[int, float]

The maximum number of audit violations to be stored in a constraint.

If not set, the internal default of 20 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#constraint_violation_limit GkeHubFeature#constraint_violation_limit}

---

###### `deployment_configs`<sup>Optional</sup> <a name="deployment_configs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.deploymentConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>]]

deployment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#deployment_configs GkeHubFeature#deployment_configs}

---

###### `exemptable_namespaces`<sup>Optional</sup> <a name="exemptable_namespaces" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.exemptableNamespaces"></a>

- *Type:* typing.List[str]

The set of namespaces that are excluded from Policy Controller checks.

Namespaces do not need to currently exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#exemptable_namespaces GkeHubFeature#exemptable_namespaces}

---

###### `log_denies_enabled`<sup>Optional</sup> <a name="log_denies_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.logDeniesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Logs all denies and dry run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#log_denies_enabled GkeHubFeature#log_denies_enabled}

---

###### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.monitoring"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#monitoring GkeHubFeature#monitoring}

---

###### `mutation_enabled`<sup>Optional</sup> <a name="mutation_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.mutationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables the ability to mutate resources using Policy Controller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#mutation_enabled GkeHubFeature#mutation_enabled}

---

###### `policy_content`<sup>Optional</sup> <a name="policy_content" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.policyContent"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent</a>

policy_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#policy_content GkeHubFeature#policy_content}

---

###### `referential_rules_enabled`<sup>Optional</sup> <a name="referential_rules_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.putPolicyControllerHubConfig.parameter.referentialRulesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#referential_rules_enabled GkeHubFeature#referential_rules_enabled}

---

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.policyControllerHubConfig">policy_controller_hub_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.policyControllerHubConfigInput">policy_controller_hub_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller">GkeHubFeatureFleetDefaultMemberConfigPolicycontroller</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_controller_hub_config`<sup>Required</sup> <a name="policy_controller_hub_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.policyControllerHubConfig"></a>

```python
policy_controller_hub_config: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference</a>

---

##### `policy_controller_hub_config_input`<sup>Optional</sup> <a name="policy_controller_hub_config_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.policyControllerHubConfigInput"></a>

```python
policy_controller_hub_config_input: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigPolicycontroller
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontroller">GkeHubFeatureFleetDefaultMemberConfigPolicycontroller</a>

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a>

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putRequests">put_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resetRequests">reset_requests</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_limits` <a name="put_limits" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putLimits"></a>

```python
def put_limits(
  cpu: str = None,
  memory: str = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putLimits.parameter.cpu"></a>

- *Type:* str

CPU requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#cpu GkeHubFeature#cpu}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putLimits.parameter.memory"></a>

- *Type:* str

Memory requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#memory GkeHubFeature#memory}

---

##### `put_requests` <a name="put_requests" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putRequests"></a>

```python
def put_requests(
  cpu: str = None,
  memory: str = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putRequests.parameter.cpu"></a>

- *Type:* str

CPU requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#cpu GkeHubFeature#cpu}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.putRequests.parameter.memory"></a>

- *Type:* str

Memory requirement expressed in Kubernetes resource units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#memory GkeHubFeature#memory}

---

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.limitsInput">limits_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.requestsInput">requests_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.limits"></a>

```python
limits: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference</a>

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.requests"></a>

```python
requests: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference</a>

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.limitsInput"></a>

```python
limits_input: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a>

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.requestsInput"></a>

```python
requests_input: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a>

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a>

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>]]

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putContainerResources">put_container_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putPodToleration">put_pod_toleration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetContainerResources">reset_container_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetPodAffinity">reset_pod_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetPodToleration">reset_pod_toleration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetReplicaCount">reset_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_resources` <a name="put_container_resources" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putContainerResources"></a>

```python
def put_container_resources(
  limits: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits = None,
  requests: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests = None
) -> None
```

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putContainerResources.parameter.limits"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#limits GkeHubFeature#limits}

---

###### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putContainerResources.parameter.requests"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests</a>

requests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#requests GkeHubFeature#requests}

---

##### `put_pod_toleration` <a name="put_pod_toleration" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putPodToleration"></a>

```python
def put_pod_toleration(
  value: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.putPodToleration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration</a>]]

---

##### `reset_container_resources` <a name="reset_container_resources" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetContainerResources"></a>

```python
def reset_container_resources() -> None
```

##### `reset_pod_affinity` <a name="reset_pod_affinity" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetPodAffinity"></a>

```python
def reset_pod_affinity() -> None
```

##### `reset_pod_toleration` <a name="reset_pod_toleration" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetPodToleration"></a>

```python
def reset_pod_toleration() -> None
```

##### `reset_replica_count` <a name="reset_replica_count" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.resetReplicaCount"></a>

```python
def reset_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.containerResources">container_resources</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podToleration">pod_toleration</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.componentInput">component_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.containerResourcesInput">container_resources_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podAffinityInput">pod_affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podTolerationInput">pod_toleration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.replicaCountInput">replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.component">component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podAffinity">pod_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_resources`<sup>Required</sup> <a name="container_resources" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.containerResources"></a>

```python
container_resources: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference</a>

---

##### `pod_toleration`<sup>Required</sup> <a name="pod_toleration" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podToleration"></a>

```python
pod_toleration: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList</a>

---

##### `component_input`<sup>Optional</sup> <a name="component_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.componentInput"></a>

```python
component_input: str
```

- *Type:* str

---

##### `container_resources_input`<sup>Optional</sup> <a name="container_resources_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.containerResourcesInput"></a>

```python
container_resources_input: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources</a>

---

##### `pod_affinity_input`<sup>Optional</sup> <a name="pod_affinity_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podAffinityInput"></a>

```python
pod_affinity_input: str
```

- *Type:* str

---

##### `pod_toleration_input`<sup>Optional</sup> <a name="pod_toleration_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podTolerationInput"></a>

```python
pod_toleration_input: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration</a>]]

---

##### `replica_count_input`<sup>Optional</sup> <a name="replica_count_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.replicaCountInput"></a>

```python
replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.component"></a>

```python
component: str
```

- *Type:* str

---

##### `pod_affinity`<sup>Required</sup> <a name="pod_affinity" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.podAffinity"></a>

```python
pod_affinity: str
```

- *Type:* str

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>]

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration</a>]]

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resetEffect">reset_effect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_effect` <a name="reset_effect" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resetEffect"></a>

```python
def reset_effect() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration</a>]

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.resetBackends">reset_backends</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backends` <a name="reset_backends" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.resetBackends"></a>

```python
def reset_backends() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.backendsInput">backends_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.backends">backends</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backends_input`<sup>Optional</sup> <a name="backends_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.backendsInput"></a>

```python
backends_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backends`<sup>Required</sup> <a name="backends" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.backends"></a>

```python
backends: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring</a>

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.putDeploymentConfigs">put_deployment_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.putMonitoring">put_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.putPolicyContent">put_policy_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetAuditIntervalSeconds">reset_audit_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetConstraintViolationLimit">reset_constraint_violation_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetDeploymentConfigs">reset_deployment_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetExemptableNamespaces">reset_exemptable_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetLogDeniesEnabled">reset_log_denies_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetMonitoring">reset_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetMutationEnabled">reset_mutation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetPolicyContent">reset_policy_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetReferentialRulesEnabled">reset_referential_rules_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_deployment_configs` <a name="put_deployment_configs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.putDeploymentConfigs"></a>

```python
def put_deployment_configs(
  value: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.putDeploymentConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>]]

---

##### `put_monitoring` <a name="put_monitoring" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.putMonitoring"></a>

```python
def put_monitoring(
  backends: typing.List[str] = None
) -> None
```

###### `backends`<sup>Optional</sup> <a name="backends" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.putMonitoring.parameter.backends"></a>

- *Type:* typing.List[str]

Specifies the list of backends Policy Controller will export to.

An empty list would effectively disable metrics export. Possible values: ["MONITORING_BACKEND_UNSPECIFIED", "PROMETHEUS", "CLOUD_MONITORING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#backends GkeHubFeature#backends}

---

##### `put_policy_content` <a name="put_policy_content" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.putPolicyContent"></a>

```python
def put_policy_content(
  bundles: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles]] = None,
  template_library: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary = None
) -> None
```

###### `bundles`<sup>Optional</sup> <a name="bundles" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.putPolicyContent.parameter.bundles"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>]]

bundles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#bundles GkeHubFeature#bundles}

---

###### `template_library`<sup>Optional</sup> <a name="template_library" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.putPolicyContent.parameter.templateLibrary"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a>

template_library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#template_library GkeHubFeature#template_library}

---

##### `reset_audit_interval_seconds` <a name="reset_audit_interval_seconds" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetAuditIntervalSeconds"></a>

```python
def reset_audit_interval_seconds() -> None
```

##### `reset_constraint_violation_limit` <a name="reset_constraint_violation_limit" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetConstraintViolationLimit"></a>

```python
def reset_constraint_violation_limit() -> None
```

##### `reset_deployment_configs` <a name="reset_deployment_configs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetDeploymentConfigs"></a>

```python
def reset_deployment_configs() -> None
```

##### `reset_exemptable_namespaces` <a name="reset_exemptable_namespaces" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetExemptableNamespaces"></a>

```python
def reset_exemptable_namespaces() -> None
```

##### `reset_log_denies_enabled` <a name="reset_log_denies_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetLogDeniesEnabled"></a>

```python
def reset_log_denies_enabled() -> None
```

##### `reset_monitoring` <a name="reset_monitoring" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetMonitoring"></a>

```python
def reset_monitoring() -> None
```

##### `reset_mutation_enabled` <a name="reset_mutation_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetMutationEnabled"></a>

```python
def reset_mutation_enabled() -> None
```

##### `reset_policy_content` <a name="reset_policy_content" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetPolicyContent"></a>

```python
def reset_policy_content() -> None
```

##### `reset_referential_rules_enabled` <a name="reset_referential_rules_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.resetReferentialRulesEnabled"></a>

```python
def reset_referential_rules_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.deploymentConfigs">deployment_configs</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.monitoring">monitoring</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.policyContent">policy_content</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.auditIntervalSecondsInput">audit_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.constraintViolationLimitInput">constraint_violation_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.deploymentConfigsInput">deployment_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.exemptableNamespacesInput">exemptable_namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.installSpecInput">install_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.logDeniesEnabledInput">log_denies_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.monitoringInput">monitoring_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.mutationEnabledInput">mutation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.policyContentInput">policy_content_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.referentialRulesEnabledInput">referential_rules_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.auditIntervalSeconds">audit_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.constraintViolationLimit">constraint_violation_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.exemptableNamespaces">exemptable_namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.installSpec">install_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.logDeniesEnabled">log_denies_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.mutationEnabled">mutation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.referentialRulesEnabled">referential_rules_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_configs`<sup>Required</sup> <a name="deployment_configs" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.deploymentConfigs"></a>

```python
deployment_configs: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.monitoring"></a>

```python
monitoring: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference</a>

---

##### `policy_content`<sup>Required</sup> <a name="policy_content" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.policyContent"></a>

```python
policy_content: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference</a>

---

##### `audit_interval_seconds_input`<sup>Optional</sup> <a name="audit_interval_seconds_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.auditIntervalSecondsInput"></a>

```python
audit_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `constraint_violation_limit_input`<sup>Optional</sup> <a name="constraint_violation_limit_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.constraintViolationLimitInput"></a>

```python
constraint_violation_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deployment_configs_input`<sup>Optional</sup> <a name="deployment_configs_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.deploymentConfigsInput"></a>

```python
deployment_configs_input: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs</a>]]

---

##### `exemptable_namespaces_input`<sup>Optional</sup> <a name="exemptable_namespaces_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.exemptableNamespacesInput"></a>

```python
exemptable_namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `install_spec_input`<sup>Optional</sup> <a name="install_spec_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.installSpecInput"></a>

```python
install_spec_input: str
```

- *Type:* str

---

##### `log_denies_enabled_input`<sup>Optional</sup> <a name="log_denies_enabled_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.logDeniesEnabledInput"></a>

```python
log_denies_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitoring_input`<sup>Optional</sup> <a name="monitoring_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.monitoringInput"></a>

```python
monitoring_input: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring</a>

---

##### `mutation_enabled_input`<sup>Optional</sup> <a name="mutation_enabled_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.mutationEnabledInput"></a>

```python
mutation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_content_input`<sup>Optional</sup> <a name="policy_content_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.policyContentInput"></a>

```python
policy_content_input: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent</a>

---

##### `referential_rules_enabled_input`<sup>Optional</sup> <a name="referential_rules_enabled_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.referentialRulesEnabledInput"></a>

```python
referential_rules_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `audit_interval_seconds`<sup>Required</sup> <a name="audit_interval_seconds" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.auditIntervalSeconds"></a>

```python
audit_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `constraint_violation_limit`<sup>Required</sup> <a name="constraint_violation_limit" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.constraintViolationLimit"></a>

```python
constraint_violation_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exemptable_namespaces`<sup>Required</sup> <a name="exemptable_namespaces" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.exemptableNamespaces"></a>

```python
exemptable_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `install_spec`<sup>Required</sup> <a name="install_spec" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.installSpec"></a>

```python
install_spec: str
```

- *Type:* str

---

##### `log_denies_enabled`<sup>Required</sup> <a name="log_denies_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.logDeniesEnabled"></a>

```python
log_denies_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mutation_enabled`<sup>Required</sup> <a name="mutation_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.mutationEnabled"></a>

```python
mutation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `referential_rules_enabled`<sup>Required</sup> <a name="referential_rules_enabled" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.referentialRulesEnabled"></a>

```python
referential_rules_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig</a>

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>]]

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.resetExemptedNamespaces">reset_exempted_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exempted_namespaces` <a name="reset_exempted_namespaces" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.resetExemptedNamespaces"></a>

```python
def reset_exempted_namespaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.bundleInput">bundle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.exemptedNamespacesInput">exempted_namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.bundle">bundle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.exemptedNamespaces">exempted_namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundle_input`<sup>Optional</sup> <a name="bundle_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.bundleInput"></a>

```python
bundle_input: str
```

- *Type:* str

---

##### `exempted_namespaces_input`<sup>Optional</sup> <a name="exempted_namespaces_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.exemptedNamespacesInput"></a>

```python
exempted_namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bundle`<sup>Required</sup> <a name="bundle" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.bundle"></a>

```python
bundle: str
```

- *Type:* str

---

##### `exempted_namespaces`<sup>Required</sup> <a name="exempted_namespaces" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.exemptedNamespaces"></a>

```python
exempted_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>]

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putBundles">put_bundles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putTemplateLibrary">put_template_library</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resetBundles">reset_bundles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resetTemplateLibrary">reset_template_library</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bundles` <a name="put_bundles" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putBundles"></a>

```python
def put_bundles(
  value: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putBundles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>]]

---

##### `put_template_library` <a name="put_template_library" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putTemplateLibrary"></a>

```python
def put_template_library(
  installation: str = None
) -> None
```

###### `installation`<sup>Optional</sup> <a name="installation" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.putTemplateLibrary.parameter.installation"></a>

- *Type:* str

Configures the manner in which the template library is installed on the cluster. Possible values: ["INSTALLATION_UNSPECIFIED", "NOT_INSTALLED", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#installation GkeHubFeature#installation}

---

##### `reset_bundles` <a name="reset_bundles" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resetBundles"></a>

```python
def reset_bundles() -> None
```

##### `reset_template_library` <a name="reset_template_library" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.resetTemplateLibrary"></a>

```python
def reset_template_library() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.bundles">bundles</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.templateLibrary">template_library</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.bundlesInput">bundles_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.templateLibraryInput">template_library_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundles`<sup>Required</sup> <a name="bundles" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.bundles"></a>

```python
bundles: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList</a>

---

##### `template_library`<sup>Required</sup> <a name="template_library" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.templateLibrary"></a>

```python
template_library: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference</a>

---

##### `bundles_input`<sup>Optional</sup> <a name="bundles_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.bundlesInput"></a>

```python
bundles_input: typing.Union[IResolvable, typing.List[GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles</a>]]

---

##### `template_library_input`<sup>Optional</sup> <a name="template_library_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.templateLibraryInput"></a>

```python
template_library_input: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent</a>

---


### GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference <a name="GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.resetInstallation">reset_installation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_installation` <a name="reset_installation" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.resetInstallation"></a>

```python
def reset_installation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.installationInput">installation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.installation">installation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `installation_input`<sup>Optional</sup> <a name="installation_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.installationInput"></a>

```python
installation_input: str
```

- *Type:* str

---

##### `installation`<sup>Required</sup> <a name="installation" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.installation"></a>

```python
installation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary">GkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary</a>

---


### GkeHubFeatureResourceStateList <a name="GkeHubFeatureResourceStateList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureResourceStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubFeatureResourceStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeHubFeatureResourceStateOutputReference <a name="GkeHubFeatureResourceStateOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureResourceStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.hasResources">has_resources</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState">GkeHubFeatureResourceState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `has_resources`<sup>Required</sup> <a name="has_resources" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.hasResources"></a>

```python
has_resources: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceStateOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureResourceState
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureResourceState">GkeHubFeatureResourceState</a>

---


### GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList <a name="GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides</a>]]

---


### GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference <a name="GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.putPostConditions">put_post_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.putUpgrade">put_upgrade</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_post_conditions` <a name="put_post_conditions" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.putPostConditions"></a>

```python
def put_post_conditions(
  soaking: str
) -> None
```

###### `soaking`<sup>Required</sup> <a name="soaking" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.putPostConditions.parameter.soaking"></a>

- *Type:* str

Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#soaking GkeHubFeature#soaking}

---

##### `put_upgrade` <a name="put_upgrade" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.putUpgrade"></a>

```python
def put_upgrade(
  name: str,
  version: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.putUpgrade.parameter.name"></a>

- *Type:* str

Name of the upgrade, e.g., "k8s_control_plane". It should be a valid upgrade name. It must not exceet 99 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#name GkeHubFeature#name}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.putUpgrade.parameter.version"></a>

- *Type:* str

Version of the upgrade, e.g., "1.22.1-gke.100". It should be a valid version. It must not exceet 99 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#version GkeHubFeature#version}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.postConditions">post_conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.upgrade">upgrade</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.postConditionsInput">post_conditions_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.upgradeInput">upgrade_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_conditions`<sup>Required</sup> <a name="post_conditions" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.postConditions"></a>

```python
post_conditions: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference</a>

---

##### `upgrade`<sup>Required</sup> <a name="upgrade" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.upgrade"></a>

```python
upgrade: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference</a>

---

##### `post_conditions_input`<sup>Optional</sup> <a name="post_conditions_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.postConditionsInput"></a>

```python
post_conditions_input: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions</a>

---

##### `upgrade_input`<sup>Optional</sup> <a name="upgrade_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.upgradeInput"></a>

```python
upgrade_input: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides</a>]

---


### GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference <a name="GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.property.soakingInput">soaking_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.property.soaking">soaking</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `soaking_input`<sup>Optional</sup> <a name="soaking_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.property.soakingInput"></a>

```python
soaking_input: str
```

- *Type:* str

---

##### `soaking`<sup>Required</sup> <a name="soaking" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.property.soaking"></a>

```python
soaking: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions</a>

---


### GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference <a name="GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade</a>

---


### GkeHubFeatureSpecClusterupgradeOutputReference <a name="GkeHubFeatureSpecClusterupgradeOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.putGkeUpgradeOverrides">put_gke_upgrade_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.putPostConditions">put_post_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.resetGkeUpgradeOverrides">reset_gke_upgrade_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.resetPostConditions">reset_post_conditions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gke_upgrade_overrides` <a name="put_gke_upgrade_overrides" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.putGkeUpgradeOverrides"></a>

```python
def put_gke_upgrade_overrides(
  value: typing.Union[IResolvable, typing.List[GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.putGkeUpgradeOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides</a>]]

---

##### `put_post_conditions` <a name="put_post_conditions" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.putPostConditions"></a>

```python
def put_post_conditions(
  soaking: str
) -> None
```

###### `soaking`<sup>Required</sup> <a name="soaking" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.putPostConditions.parameter.soaking"></a>

- *Type:* str

Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#soaking GkeHubFeature#soaking}

---

##### `reset_gke_upgrade_overrides` <a name="reset_gke_upgrade_overrides" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.resetGkeUpgradeOverrides"></a>

```python
def reset_gke_upgrade_overrides() -> None
```

##### `reset_post_conditions` <a name="reset_post_conditions" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.resetPostConditions"></a>

```python
def reset_post_conditions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.gkeUpgradeOverrides">gke_upgrade_overrides</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.postConditions">post_conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference">GkeHubFeatureSpecClusterupgradePostConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.gkeUpgradeOverridesInput">gke_upgrade_overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.postConditionsInput">post_conditions_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions">GkeHubFeatureSpecClusterupgradePostConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.upstreamFleetsInput">upstream_fleets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.upstreamFleets">upstream_fleets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade">GkeHubFeatureSpecClusterupgrade</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gke_upgrade_overrides`<sup>Required</sup> <a name="gke_upgrade_overrides" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.gkeUpgradeOverrides"></a>

```python
gke_upgrade_overrides: GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList</a>

---

##### `post_conditions`<sup>Required</sup> <a name="post_conditions" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.postConditions"></a>

```python
post_conditions: GkeHubFeatureSpecClusterupgradePostConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference">GkeHubFeatureSpecClusterupgradePostConditionsOutputReference</a>

---

##### `gke_upgrade_overrides_input`<sup>Optional</sup> <a name="gke_upgrade_overrides_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.gkeUpgradeOverridesInput"></a>

```python
gke_upgrade_overrides_input: typing.Union[IResolvable, typing.List[GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides</a>]]

---

##### `post_conditions_input`<sup>Optional</sup> <a name="post_conditions_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.postConditionsInput"></a>

```python
post_conditions_input: GkeHubFeatureSpecClusterupgradePostConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions">GkeHubFeatureSpecClusterupgradePostConditions</a>

---

##### `upstream_fleets_input`<sup>Optional</sup> <a name="upstream_fleets_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.upstreamFleetsInput"></a>

```python
upstream_fleets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `upstream_fleets`<sup>Required</sup> <a name="upstream_fleets" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.upstreamFleets"></a>

```python
upstream_fleets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureSpecClusterupgrade
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade">GkeHubFeatureSpecClusterupgrade</a>

---


### GkeHubFeatureSpecClusterupgradePostConditionsOutputReference <a name="GkeHubFeatureSpecClusterupgradePostConditionsOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.property.soakingInput">soaking_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.property.soaking">soaking</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions">GkeHubFeatureSpecClusterupgradePostConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `soaking_input`<sup>Optional</sup> <a name="soaking_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.property.soakingInput"></a>

```python
soaking_input: str
```

- *Type:* str

---

##### `soaking`<sup>Required</sup> <a name="soaking" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.property.soaking"></a>

```python
soaking: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureSpecClusterupgradePostConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions">GkeHubFeatureSpecClusterupgradePostConditions</a>

---


### GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---


### GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---


### GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference <a name="GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig">put_default_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig">put_fleet_scope_logs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetDefaultConfig">reset_default_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetFleetScopeLogsConfig">reset_fleet_scope_logs_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_config` <a name="put_default_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig"></a>

```python
def put_default_config(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putDefaultConfig.parameter.mode"></a>

- *Type:* str

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#mode GkeHubFeature#mode}

---

##### `put_fleet_scope_logs_config` <a name="put_fleet_scope_logs_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig"></a>

```python
def put_fleet_scope_logs_config(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.putFleetScopeLogsConfig.parameter.mode"></a>

- *Type:* str

Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#mode GkeHubFeature#mode}

---

##### `reset_default_config` <a name="reset_default_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetDefaultConfig"></a>

```python
def reset_default_config() -> None
```

##### `reset_fleet_scope_logs_config` <a name="reset_fleet_scope_logs_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.resetFleetScopeLogsConfig"></a>

```python
def reset_fleet_scope_logs_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfig">default_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfig">fleet_scope_logs_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfigInput">default_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfigInput">fleet_scope_logs_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_config`<sup>Required</sup> <a name="default_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfig"></a>

```python
default_config: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference</a>

---

##### `fleet_scope_logs_config`<sup>Required</sup> <a name="fleet_scope_logs_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfig"></a>

```python
fleet_scope_logs_config: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference</a>

---

##### `default_config_input`<sup>Optional</sup> <a name="default_config_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.defaultConfigInput"></a>

```python
default_config_input: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

---

##### `fleet_scope_logs_config_input`<sup>Optional</sup> <a name="fleet_scope_logs_config_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.fleetScopeLogsConfigInput"></a>

```python
fleet_scope_logs_config_input: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---


### GkeHubFeatureSpecFleetobservabilityOutputReference <a name="GkeHubFeatureSpecFleetobservabilityOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  default_config: GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig = None,
  fleet_scope_logs_config: GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig = None
) -> None
```

###### `default_config`<sup>Optional</sup> <a name="default_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig.parameter.defaultConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig</a>

default_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#default_config GkeHubFeature#default_config}

---

###### `fleet_scope_logs_config`<sup>Optional</sup> <a name="fleet_scope_logs_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.putLoggingConfig.parameter.fleetScopeLogsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig</a>

fleet_scope_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#fleet_scope_logs_config GkeHubFeature#fleet_scope_logs_config}

---

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfig"></a>

```python
logging_config: GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference">GkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference</a>

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: GkeHubFeatureSpecFleetobservabilityLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

---


### GkeHubFeatureSpecMulticlusteringressOutputReference <a name="GkeHubFeatureSpecMulticlusteringressOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembershipInput">config_membership_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembership">config_membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_membership_input`<sup>Optional</sup> <a name="config_membership_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembershipInput"></a>

```python
config_membership_input: str
```

- *Type:* str

---

##### `config_membership`<sup>Required</sup> <a name="config_membership" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.configMembership"></a>

```python
config_membership: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

---


### GkeHubFeatureSpecOutputReference <a name="GkeHubFeatureSpecOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putClusterupgrade">put_clusterupgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putFleetobservability">put_fleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putMulticlusteringress">put_multiclusteringress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetClusterupgrade">reset_clusterupgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetFleetobservability">reset_fleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetMulticlusteringress">reset_multiclusteringress</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clusterupgrade` <a name="put_clusterupgrade" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putClusterupgrade"></a>

```python
def put_clusterupgrade(
  upstream_fleets: typing.List[str],
  gke_upgrade_overrides: typing.Union[IResolvable, typing.List[GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides]] = None,
  post_conditions: GkeHubFeatureSpecClusterupgradePostConditions = None
) -> None
```

###### `upstream_fleets`<sup>Required</sup> <a name="upstream_fleets" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putClusterupgrade.parameter.upstreamFleets"></a>

- *Type:* typing.List[str]

Specified if other fleet should be considered as a source of upgrades.

Currently, at most one upstream fleet is allowed. The fleet name should be either fleet project number or id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#upstream_fleets GkeHubFeature#upstream_fleets}

---

###### `gke_upgrade_overrides`<sup>Optional</sup> <a name="gke_upgrade_overrides" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putClusterupgrade.parameter.gkeUpgradeOverrides"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides">GkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides</a>]]

gke_upgrade_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#gke_upgrade_overrides GkeHubFeature#gke_upgrade_overrides}

---

###### `post_conditions`<sup>Optional</sup> <a name="post_conditions" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putClusterupgrade.parameter.postConditions"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradePostConditions">GkeHubFeatureSpecClusterupgradePostConditions</a>

post_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#post_conditions GkeHubFeature#post_conditions}

---

##### `put_fleetobservability` <a name="put_fleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putFleetobservability"></a>

```python
def put_fleetobservability(
  logging_config: GkeHubFeatureSpecFleetobservabilityLoggingConfig = None
) -> None
```

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putFleetobservability.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityLoggingConfig">GkeHubFeatureSpecFleetobservabilityLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#logging_config GkeHubFeature#logging_config}

---

##### `put_multiclusteringress` <a name="put_multiclusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putMulticlusteringress"></a>

```python
def put_multiclusteringress(
  config_membership: str
) -> None
```

###### `config_membership`<sup>Required</sup> <a name="config_membership" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.putMulticlusteringress.parameter.configMembership"></a>

- *Type:* str

Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/gke_hub_feature#config_membership GkeHubFeature#config_membership}

---

##### `reset_clusterupgrade` <a name="reset_clusterupgrade" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetClusterupgrade"></a>

```python
def reset_clusterupgrade() -> None
```

##### `reset_fleetobservability` <a name="reset_fleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetFleetobservability"></a>

```python
def reset_fleetobservability() -> None
```

##### `reset_multiclusteringress` <a name="reset_multiclusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.resetMulticlusteringress"></a>

```python
def reset_multiclusteringress() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.clusterupgrade">clusterupgrade</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference">GkeHubFeatureSpecClusterupgradeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservability">fleetobservability</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference">GkeHubFeatureSpecFleetobservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringress">multiclusteringress</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference">GkeHubFeatureSpecMulticlusteringressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.clusterupgradeInput">clusterupgrade_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade">GkeHubFeatureSpecClusterupgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservabilityInput">fleetobservability_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringressInput">multiclusteringress_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clusterupgrade`<sup>Required</sup> <a name="clusterupgrade" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.clusterupgrade"></a>

```python
clusterupgrade: GkeHubFeatureSpecClusterupgradeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgradeOutputReference">GkeHubFeatureSpecClusterupgradeOutputReference</a>

---

##### `fleetobservability`<sup>Required</sup> <a name="fleetobservability" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservability"></a>

```python
fleetobservability: GkeHubFeatureSpecFleetobservabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservabilityOutputReference">GkeHubFeatureSpecFleetobservabilityOutputReference</a>

---

##### `multiclusteringress`<sup>Required</sup> <a name="multiclusteringress" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringress"></a>

```python
multiclusteringress: GkeHubFeatureSpecMulticlusteringressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringressOutputReference">GkeHubFeatureSpecMulticlusteringressOutputReference</a>

---

##### `clusterupgrade_input`<sup>Optional</sup> <a name="clusterupgrade_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.clusterupgradeInput"></a>

```python
clusterupgrade_input: GkeHubFeatureSpecClusterupgrade
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecClusterupgrade">GkeHubFeatureSpecClusterupgrade</a>

---

##### `fleetobservability_input`<sup>Optional</sup> <a name="fleetobservability_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.fleetobservabilityInput"></a>

```python
fleetobservability_input: GkeHubFeatureSpecFleetobservability
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecFleetobservability">GkeHubFeatureSpecFleetobservability</a>

---

##### `multiclusteringress_input`<sup>Optional</sup> <a name="multiclusteringress_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.multiclusteringressInput"></a>

```python
multiclusteringress_input: GkeHubFeatureSpecMulticlusteringress
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecMulticlusteringress">GkeHubFeatureSpecMulticlusteringress</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpecOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureSpec
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureSpec">GkeHubFeatureSpec</a>

---


### GkeHubFeatureStateList <a name="GkeHubFeatureStateList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubFeatureStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeHubFeatureStateOutputReference <a name="GkeHubFeatureStateOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.state">state</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList">GkeHubFeatureStateStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState">GkeHubFeatureState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.state"></a>

```python
state: GkeHubFeatureStateStateList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList">GkeHubFeatureStateStateList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureState
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureState">GkeHubFeatureState</a>

---


### GkeHubFeatureStateStateList <a name="GkeHubFeatureStateStateList" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureStateStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubFeatureStateStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeHubFeatureStateStateOutputReference <a name="GkeHubFeatureStateStateOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureStateStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState">GkeHubFeatureStateState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateStateOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFeatureStateState
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureStateState">GkeHubFeatureStateState</a>

---


### GkeHubFeatureTimeoutsOutputReference <a name="GkeHubFeatureTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_feature

gkeHubFeature.GkeHubFeatureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeHubFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFeature.GkeHubFeatureTimeouts">GkeHubFeatureTimeouts</a>]

---



