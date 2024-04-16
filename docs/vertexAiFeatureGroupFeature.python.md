# `vertexAiFeatureGroupFeature` Submodule <a name="`vertexAiFeatureGroupFeature` Submodule" id="@cdktf/provider-google.vertexAiFeatureGroupFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeatureGroupFeature <a name="VertexAiFeatureGroupFeature" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature google_vertex_ai_feature_group_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_group_feature

vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feature_group: str,
  name: str,
  region: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: VertexAiFeatureGroupFeatureTimeouts = None,
  version_column_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.featureGroup">feature_group</a></code> | <code>str</code> | The name of the Feature Group. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the Feature Group Feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.region">region</a></code> | <code>str</code> | The region for the resource. It should be the same as the feature group's region. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#id VertexAiFeatureGroupFeature#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#project VertexAiFeatureGroupFeature#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.versionColumnName">version_column_name</a></code> | <code>str</code> | The name of the BigQuery Table/View column hosting data for this version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_group`<sup>Required</sup> <a name="feature_group" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.featureGroup"></a>

- *Type:* str

The name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#feature_group VertexAiFeatureGroupFeature#feature_group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the Feature Group Feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#name VertexAiFeatureGroupFeature#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.region"></a>

- *Type:* str

The region for the resource. It should be the same as the feature group's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#region VertexAiFeatureGroupFeature#region}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.description"></a>

- *Type:* str

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#description VertexAiFeatureGroupFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#id VertexAiFeatureGroupFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#labels VertexAiFeatureGroupFeature#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#project VertexAiFeatureGroupFeature#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#timeouts VertexAiFeatureGroupFeature#timeouts}

---

##### `version_column_name`<sup>Optional</sup> <a name="version_column_name" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.Initializer.parameter.versionColumnName"></a>

- *Type:* str

The name of the BigQuery Table/View column hosting data for this version.

If no value is provided, will use featureId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#version_column_name VertexAiFeatureGroupFeature#version_column_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetVersionColumnName">reset_version_column_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#create VertexAiFeatureGroupFeature#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#delete VertexAiFeatureGroupFeature#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#update VertexAiFeatureGroupFeature#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version_column_name` <a name="reset_version_column_name" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.resetVersionColumnName"></a>

```python
def reset_version_column_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VertexAiFeatureGroupFeature resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_group_feature

vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_group_feature

vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_group_feature

vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_group_feature

vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VertexAiFeatureGroupFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiFeatureGroupFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiFeatureGroupFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiFeatureGroupFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference">VertexAiFeatureGroupFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.featureGroupInput">feature_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.versionColumnNameInput">version_column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.featureGroup">feature_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.versionColumnName">version_column_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.timeouts"></a>

```python
timeouts: VertexAiFeatureGroupFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference">VertexAiFeatureGroupFeatureTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `feature_group_input`<sup>Optional</sup> <a name="feature_group_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.featureGroupInput"></a>

```python
feature_group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VertexAiFeatureGroupFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>]

---

##### `version_column_name_input`<sup>Optional</sup> <a name="version_column_name_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.versionColumnNameInput"></a>

```python
version_column_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `feature_group`<sup>Required</sup> <a name="feature_group" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.featureGroup"></a>

```python
feature_group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `version_column_name`<sup>Required</sup> <a name="version_column_name" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.versionColumnName"></a>

```python
version_column_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeatureGroupFeatureConfig <a name="VertexAiFeatureGroupFeatureConfig" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_group_feature

vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feature_group: str,
  name: str,
  region: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: VertexAiFeatureGroupFeatureTimeouts = None,
  version_column_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.featureGroup">feature_group</a></code> | <code>str</code> | The name of the Feature Group. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.name">name</a></code> | <code>str</code> | The resource name of the Feature Group Feature. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.region">region</a></code> | <code>str</code> | The region for the resource. It should be the same as the feature group's region. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.description">description</a></code> | <code>str</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#id VertexAiFeatureGroupFeature#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#project VertexAiFeatureGroupFeature#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.versionColumnName">version_column_name</a></code> | <code>str</code> | The name of the BigQuery Table/View column hosting data for this version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_group`<sup>Required</sup> <a name="feature_group" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.featureGroup"></a>

```python
feature_group: str
```

- *Type:* str

The name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#feature_group VertexAiFeatureGroupFeature#feature_group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Feature Group Feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#name VertexAiFeatureGroupFeature#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region for the resource. It should be the same as the feature group's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#region VertexAiFeatureGroupFeature#region}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#description VertexAiFeatureGroupFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#id VertexAiFeatureGroupFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#labels VertexAiFeatureGroupFeature#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#project VertexAiFeatureGroupFeature#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.timeouts"></a>

```python
timeouts: VertexAiFeatureGroupFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#timeouts VertexAiFeatureGroupFeature#timeouts}

---

##### `version_column_name`<sup>Optional</sup> <a name="version_column_name" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureConfig.property.versionColumnName"></a>

```python
version_column_name: str
```

- *Type:* str

The name of the BigQuery Table/View column hosting data for this version.

If no value is provided, will use featureId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#version_column_name VertexAiFeatureGroupFeature#version_column_name}

---

### VertexAiFeatureGroupFeatureTimeouts <a name="VertexAiFeatureGroupFeatureTimeouts" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_group_feature

vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#create VertexAiFeatureGroupFeature#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#delete VertexAiFeatureGroupFeature#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#update VertexAiFeatureGroupFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#create VertexAiFeatureGroupFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#delete VertexAiFeatureGroupFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/vertex_ai_feature_group_feature#update VertexAiFeatureGroupFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeatureGroupFeatureTimeoutsOutputReference <a name="VertexAiFeatureGroupFeatureTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_feature_group_feature

vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VertexAiFeatureGroupFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeatureGroupFeature.VertexAiFeatureGroupFeatureTimeouts">VertexAiFeatureGroupFeatureTimeouts</a>]

---



