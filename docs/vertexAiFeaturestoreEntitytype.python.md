# `vertexAiFeaturestoreEntitytype` Submodule <a name="`vertexAiFeaturestoreEntitytype` Submodule" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeaturestoreEntitytype <a name="VertexAiFeaturestoreEntitytype" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype google_vertex_ai_featurestore_entitytype}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  featurestore: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  monitoring_config: VertexAiFeaturestoreEntitytypeMonitoringConfig = None,
  name: str = None,
  timeouts: VertexAiFeaturestoreEntitytypeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.featurestore">featurestore</a></code> | <code>str</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Description of the EntityType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#id VertexAiFeaturestoreEntitytype#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this EntityType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.monitoringConfig">monitoring_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the EntityType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `featurestore`<sup>Required</sup> <a name="featurestore" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.featurestore"></a>

- *Type:* str

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#featurestore VertexAiFeaturestoreEntitytype#featurestore}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.description"></a>

- *Type:* str

Optional. Description of the EntityType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#description VertexAiFeaturestoreEntitytype#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#id VertexAiFeaturestoreEntitytype#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this EntityType.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#labels VertexAiFeaturestoreEntitytype#labels}

---

##### `monitoring_config`<sup>Optional</sup> <a name="monitoring_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.monitoringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#monitoring_config VertexAiFeaturestoreEntitytype#monitoring_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.name"></a>

- *Type:* str

The name of the EntityType.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#name VertexAiFeaturestoreEntitytype#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#timeouts VertexAiFeaturestoreEntitytype#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putMonitoringConfig">put_monitoring_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetMonitoringConfig">reset_monitoring_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_monitoring_config` <a name="put_monitoring_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putMonitoringConfig"></a>

```python
def put_monitoring_config(
  categorical_threshold_config: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig = None,
  import_features_analysis: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis = None,
  numerical_threshold_config: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig = None,
  snapshot_analysis: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis = None
) -> None
```

###### `categorical_threshold_config`<sup>Optional</sup> <a name="categorical_threshold_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putMonitoringConfig.parameter.categoricalThresholdConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

categorical_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#categorical_threshold_config VertexAiFeaturestoreEntitytype#categorical_threshold_config}

---

###### `import_features_analysis`<sup>Optional</sup> <a name="import_features_analysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putMonitoringConfig.parameter.importFeaturesAnalysis"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

import_features_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#import_features_analysis VertexAiFeaturestoreEntitytype#import_features_analysis}

---

###### `numerical_threshold_config`<sup>Optional</sup> <a name="numerical_threshold_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putMonitoringConfig.parameter.numericalThresholdConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

numerical_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#numerical_threshold_config VertexAiFeaturestoreEntitytype#numerical_threshold_config}

---

###### `snapshot_analysis`<sup>Optional</sup> <a name="snapshot_analysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putMonitoringConfig.parameter.snapshotAnalysis"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

snapshot_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#snapshot_analysis VertexAiFeaturestoreEntitytype#snapshot_analysis}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#create VertexAiFeaturestoreEntitytype#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#delete VertexAiFeaturestoreEntitytype#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#update VertexAiFeaturestoreEntitytype#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_monitoring_config` <a name="reset_monitoring_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetMonitoringConfig"></a>

```python
def reset_monitoring_config() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VertexAiFeaturestoreEntitytype resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VertexAiFeaturestoreEntitytype resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiFeaturestoreEntitytype to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiFeaturestoreEntitytype that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiFeaturestoreEntitytype to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.monitoringConfig">monitoring_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference">VertexAiFeaturestoreEntitytypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.featurestoreInput">featurestore_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.monitoringConfigInput">monitoring_config_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.featurestore">featurestore</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `monitoring_config`<sup>Required</sup> <a name="monitoring_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.monitoringConfig"></a>

```python
monitoring_config: VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.timeouts"></a>

```python
timeouts: VertexAiFeaturestoreEntitytypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference">VertexAiFeaturestoreEntitytypeTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `featurestore_input`<sup>Optional</sup> <a name="featurestore_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.featurestoreInput"></a>

```python
featurestore_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `monitoring_config_input`<sup>Optional</sup> <a name="monitoring_config_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.monitoringConfigInput"></a>

```python
monitoring_config_input: VertexAiFeaturestoreEntitytypeMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VertexAiFeaturestoreEntitytypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `featurestore`<sup>Required</sup> <a name="featurestore" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.featurestore"></a>

```python
featurestore: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytype.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeaturestoreEntitytypeConfig <a name="VertexAiFeaturestoreEntitytypeConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  featurestore: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  monitoring_config: VertexAiFeaturestoreEntitytypeMonitoringConfig = None,
  name: str = None,
  timeouts: VertexAiFeaturestoreEntitytypeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.featurestore">featurestore</a></code> | <code>str</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.description">description</a></code> | <code>str</code> | Optional. Description of the EntityType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#id VertexAiFeaturestoreEntitytype#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this EntityType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.monitoringConfig">monitoring_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.name">name</a></code> | <code>str</code> | The name of the EntityType. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `featurestore`<sup>Required</sup> <a name="featurestore" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.featurestore"></a>

```python
featurestore: str
```

- *Type:* str

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#featurestore VertexAiFeaturestoreEntitytype#featurestore}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of the EntityType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#description VertexAiFeaturestoreEntitytype#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#id VertexAiFeaturestoreEntitytype#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this EntityType.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#labels VertexAiFeaturestoreEntitytype#labels}

---

##### `monitoring_config`<sup>Optional</sup> <a name="monitoring_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.monitoringConfig"></a>

```python
monitoring_config: VertexAiFeaturestoreEntitytypeMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#monitoring_config VertexAiFeaturestoreEntitytype#monitoring_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the EntityType.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#name VertexAiFeaturestoreEntitytype#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeConfig.property.timeouts"></a>

```python
timeouts: VertexAiFeaturestoreEntitytypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#timeouts VertexAiFeaturestoreEntitytype#timeouts}

---

### VertexAiFeaturestoreEntitytypeMonitoringConfig <a name="VertexAiFeaturestoreEntitytypeMonitoringConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig(
  categorical_threshold_config: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig = None,
  import_features_analysis: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis = None,
  numerical_threshold_config: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig = None,
  snapshot_analysis: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.categoricalThresholdConfig">categorical_threshold_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a></code> | categorical_threshold_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.importFeaturesAnalysis">import_features_analysis</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a></code> | import_features_analysis block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.numericalThresholdConfig">numerical_threshold_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a></code> | numerical_threshold_config block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.snapshotAnalysis">snapshot_analysis</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a></code> | snapshot_analysis block. |

---

##### `categorical_threshold_config`<sup>Optional</sup> <a name="categorical_threshold_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.categoricalThresholdConfig"></a>

```python
categorical_threshold_config: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

categorical_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#categorical_threshold_config VertexAiFeaturestoreEntitytype#categorical_threshold_config}

---

##### `import_features_analysis`<sup>Optional</sup> <a name="import_features_analysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.importFeaturesAnalysis"></a>

```python
import_features_analysis: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

import_features_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#import_features_analysis VertexAiFeaturestoreEntitytype#import_features_analysis}

---

##### `numerical_threshold_config`<sup>Optional</sup> <a name="numerical_threshold_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.numericalThresholdConfig"></a>

```python
numerical_threshold_config: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

numerical_threshold_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#numerical_threshold_config VertexAiFeaturestoreEntitytype#numerical_threshold_config}

---

##### `snapshot_analysis`<sup>Optional</sup> <a name="snapshot_analysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig.property.snapshotAnalysis"></a>

```python
snapshot_analysis: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

snapshot_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#snapshot_analysis VertexAiFeaturestoreEntitytype#snapshot_analysis}

---

### VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig(
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Specify a threshold value that can trigger the alert. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify a threshold value that can trigger the alert.

For categorical feature, the distribution distance is calculated by L-inifinity norm. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#value VertexAiFeaturestoreEntitytype#value}

---

### VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis(
  anomaly_detection_baseline: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.anomalyDetectionBaseline">anomaly_detection_baseline</a></code> | <code>str</code> | Defines the baseline to do anomaly detection for feature values imported by each [entityTypes.importFeatureValues][] operation. The value must be one of the values below: * LATEST_STATS: Choose the later one statistics generated by either most recent snapshot analysis or previous import features analysis. If non of them exists, skip anomaly detection and only generate a statistics. * MOST_RECENT_SNAPSHOT_STATS: Use the statistics generated by the most recent snapshot analysis if exists. * PREVIOUS_IMPORT_FEATURES_STATS: Use the statistics generated by the previous import features analysis if exists. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.state">state</a></code> | <code>str</code> | Whether to enable / disable / inherite default hebavior for import features analysis. |

---

##### `anomaly_detection_baseline`<sup>Optional</sup> <a name="anomaly_detection_baseline" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.anomalyDetectionBaseline"></a>

```python
anomaly_detection_baseline: str
```

- *Type:* str

Defines the baseline to do anomaly detection for feature values imported by each [entityTypes.importFeatureValues][] operation. The value must be one of the values below: * LATEST_STATS: Choose the later one statistics generated by either most recent snapshot analysis or previous import features analysis. If non of them exists, skip anomaly detection and only generate a statistics. * MOST_RECENT_SNAPSHOT_STATS: Use the statistics generated by the most recent snapshot analysis if exists. * PREVIOUS_IMPORT_FEATURES_STATS: Use the statistics generated by the previous import features analysis if exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#anomaly_detection_baseline VertexAiFeaturestoreEntitytype#anomaly_detection_baseline}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis.property.state"></a>

```python
state: str
```

- *Type:* str

Whether to enable / disable / inherite default hebavior for import features analysis.

The value must be one of the values below:

* DEFAULT: The default behavior of whether to enable the monitoring. EntityType-level config: disabled.
* ENABLED: Explicitly enables import features analysis. EntityType-level config: by default enables import features analysis for all Features under it.
* DISABLED: Explicitly disables import features analysis. EntityType-level config: by default disables import features analysis for all Features under it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#state VertexAiFeaturestoreEntitytype#state}

---

### VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig(
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Specify a threshold value that can trigger the alert. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify a threshold value that can trigger the alert.

For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#value VertexAiFeaturestoreEntitytype#value}

---

### VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis(
  disabled: typing.Union[bool, IResolvable] = None,
  monitoring_interval_days: typing.Union[int, float] = None,
  staleness_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The monitoring schedule for snapshot analysis. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.monitoringIntervalDays">monitoring_interval_days</a></code> | <code>typing.Union[int, float]</code> | Configuration of the snapshot analysis based monitoring pipeline running interval. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.stalenessDays">staleness_days</a></code> | <code>typing.Union[int, float]</code> | Customized export features time window for snapshot analysis. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The monitoring schedule for snapshot analysis.

For EntityType-level config: unset / disabled = true indicates disabled by default for Features under it; otherwise by default enable snapshot analysis monitoring with monitoringInterval for Features under it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#disabled VertexAiFeaturestoreEntitytype#disabled}

---

##### `monitoring_interval_days`<sup>Optional</sup> <a name="monitoring_interval_days" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.monitoringIntervalDays"></a>

```python
monitoring_interval_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Configuration of the snapshot analysis based monitoring pipeline running interval.

The value indicates number of days. The default value is 1.
If both FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days and [FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval][] are set when creating/updating EntityTypes/Features, FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#monitoring_interval_days VertexAiFeaturestoreEntitytype#monitoring_interval_days}

---

##### `staleness_days`<sup>Optional</sup> <a name="staleness_days" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis.property.stalenessDays"></a>

```python
staleness_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Customized export features time window for snapshot analysis.

Unit is one day. The default value is 21 days. Minimum value is 1 day. Maximum value is 4000 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#staleness_days VertexAiFeaturestoreEntitytype#staleness_days}

---

### VertexAiFeaturestoreEntitytypeTimeouts <a name="VertexAiFeaturestoreEntitytypeTimeouts" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#create VertexAiFeaturestoreEntitytype#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#delete VertexAiFeaturestoreEntitytype#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#update VertexAiFeaturestoreEntitytype#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#create VertexAiFeaturestoreEntitytype#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#delete VertexAiFeaturestoreEntitytype#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#update VertexAiFeaturestoreEntitytype#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

---


### VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetAnomalyDetectionBaseline">reset_anomaly_detection_baseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_anomaly_detection_baseline` <a name="reset_anomaly_detection_baseline" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetAnomalyDetectionBaseline"></a>

```python
def reset_anomaly_detection_baseline() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaselineInput">anomaly_detection_baseline_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaseline">anomaly_detection_baseline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anomaly_detection_baseline_input`<sup>Optional</sup> <a name="anomaly_detection_baseline_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaselineInput"></a>

```python
anomaly_detection_baseline_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `anomaly_detection_baseline`<sup>Required</sup> <a name="anomaly_detection_baseline" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.anomalyDetectionBaseline"></a>

```python
anomaly_detection_baseline: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

---


### VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

---


### VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putCategoricalThresholdConfig">put_categorical_threshold_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putImportFeaturesAnalysis">put_import_features_analysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putNumericalThresholdConfig">put_numerical_threshold_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis">put_snapshot_analysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetCategoricalThresholdConfig">reset_categorical_threshold_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetImportFeaturesAnalysis">reset_import_features_analysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetNumericalThresholdConfig">reset_numerical_threshold_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetSnapshotAnalysis">reset_snapshot_analysis</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_categorical_threshold_config` <a name="put_categorical_threshold_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putCategoricalThresholdConfig"></a>

```python
def put_categorical_threshold_config(
  value: typing.Union[int, float]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putCategoricalThresholdConfig.parameter.value"></a>

- *Type:* typing.Union[int, float]

Specify a threshold value that can trigger the alert.

For categorical feature, the distribution distance is calculated by L-inifinity norm. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#value VertexAiFeaturestoreEntitytype#value}

---

##### `put_import_features_analysis` <a name="put_import_features_analysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putImportFeaturesAnalysis"></a>

```python
def put_import_features_analysis(
  anomaly_detection_baseline: str = None,
  state: str = None
) -> None
```

###### `anomaly_detection_baseline`<sup>Optional</sup> <a name="anomaly_detection_baseline" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putImportFeaturesAnalysis.parameter.anomalyDetectionBaseline"></a>

- *Type:* str

Defines the baseline to do anomaly detection for feature values imported by each [entityTypes.importFeatureValues][] operation. The value must be one of the values below: * LATEST_STATS: Choose the later one statistics generated by either most recent snapshot analysis or previous import features analysis. If non of them exists, skip anomaly detection and only generate a statistics. * MOST_RECENT_SNAPSHOT_STATS: Use the statistics generated by the most recent snapshot analysis if exists. * PREVIOUS_IMPORT_FEATURES_STATS: Use the statistics generated by the previous import features analysis if exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#anomaly_detection_baseline VertexAiFeaturestoreEntitytype#anomaly_detection_baseline}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putImportFeaturesAnalysis.parameter.state"></a>

- *Type:* str

Whether to enable / disable / inherite default hebavior for import features analysis.

The value must be one of the values below:

* DEFAULT: The default behavior of whether to enable the monitoring. EntityType-level config: disabled.
* ENABLED: Explicitly enables import features analysis. EntityType-level config: by default enables import features analysis for all Features under it.
* DISABLED: Explicitly disables import features analysis. EntityType-level config: by default disables import features analysis for all Features under it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#state VertexAiFeaturestoreEntitytype#state}

---

##### `put_numerical_threshold_config` <a name="put_numerical_threshold_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putNumericalThresholdConfig"></a>

```python
def put_numerical_threshold_config(
  value: typing.Union[int, float]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putNumericalThresholdConfig.parameter.value"></a>

- *Type:* typing.Union[int, float]

Specify a threshold value that can trigger the alert.

For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#value VertexAiFeaturestoreEntitytype#value}

---

##### `put_snapshot_analysis` <a name="put_snapshot_analysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis"></a>

```python
def put_snapshot_analysis(
  disabled: typing.Union[bool, IResolvable] = None,
  monitoring_interval_days: typing.Union[int, float] = None,
  staleness_days: typing.Union[int, float] = None
) -> None
```

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The monitoring schedule for snapshot analysis.

For EntityType-level config: unset / disabled = true indicates disabled by default for Features under it; otherwise by default enable snapshot analysis monitoring with monitoringInterval for Features under it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#disabled VertexAiFeaturestoreEntitytype#disabled}

---

###### `monitoring_interval_days`<sup>Optional</sup> <a name="monitoring_interval_days" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis.parameter.monitoringIntervalDays"></a>

- *Type:* typing.Union[int, float]

Configuration of the snapshot analysis based monitoring pipeline running interval.

The value indicates number of days. The default value is 1.
If both FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days and [FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval][] are set when creating/updating EntityTypes/Features, FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#monitoring_interval_days VertexAiFeaturestoreEntitytype#monitoring_interval_days}

---

###### `staleness_days`<sup>Optional</sup> <a name="staleness_days" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.putSnapshotAnalysis.parameter.stalenessDays"></a>

- *Type:* typing.Union[int, float]

Customized export features time window for snapshot analysis.

Unit is one day. The default value is 21 days. Minimum value is 1 day. Maximum value is 4000 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/vertex_ai_featurestore_entitytype#staleness_days VertexAiFeaturestoreEntitytype#staleness_days}

---

##### `reset_categorical_threshold_config` <a name="reset_categorical_threshold_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetCategoricalThresholdConfig"></a>

```python
def reset_categorical_threshold_config() -> None
```

##### `reset_import_features_analysis` <a name="reset_import_features_analysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetImportFeaturesAnalysis"></a>

```python
def reset_import_features_analysis() -> None
```

##### `reset_numerical_threshold_config` <a name="reset_numerical_threshold_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetNumericalThresholdConfig"></a>

```python
def reset_numerical_threshold_config() -> None
```

##### `reset_snapshot_analysis` <a name="reset_snapshot_analysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.resetSnapshotAnalysis"></a>

```python
def reset_snapshot_analysis() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfig">categorical_threshold_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysis">import_features_analysis</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfig">numerical_threshold_config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysis">snapshot_analysis</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfigInput">categorical_threshold_config_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysisInput">import_features_analysis_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfigInput">numerical_threshold_config_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysisInput">snapshot_analysis_input</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `categorical_threshold_config`<sup>Required</sup> <a name="categorical_threshold_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfig"></a>

```python
categorical_threshold_config: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference</a>

---

##### `import_features_analysis`<sup>Required</sup> <a name="import_features_analysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysis"></a>

```python
import_features_analysis: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference</a>

---

##### `numerical_threshold_config`<sup>Required</sup> <a name="numerical_threshold_config" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfig"></a>

```python
numerical_threshold_config: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference</a>

---

##### `snapshot_analysis`<sup>Required</sup> <a name="snapshot_analysis" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysis"></a>

```python
snapshot_analysis: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference</a>

---

##### `categorical_threshold_config_input`<sup>Optional</sup> <a name="categorical_threshold_config_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.categoricalThresholdConfigInput"></a>

```python
categorical_threshold_config_input: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig</a>

---

##### `import_features_analysis_input`<sup>Optional</sup> <a name="import_features_analysis_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.importFeaturesAnalysisInput"></a>

```python
import_features_analysis_input: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis</a>

---

##### `numerical_threshold_config_input`<sup>Optional</sup> <a name="numerical_threshold_config_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.numericalThresholdConfigInput"></a>

```python
numerical_threshold_config_input: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig">VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig</a>

---

##### `snapshot_analysis_input`<sup>Optional</sup> <a name="snapshot_analysis_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.snapshotAnalysisInput"></a>

```python
snapshot_analysis_input: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiFeaturestoreEntitytypeMonitoringConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfig">VertexAiFeaturestoreEntitytypeMonitoringConfig</a>

---


### VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference <a name="VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetMonitoringIntervalDays">reset_monitoring_interval_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetStalenessDays">reset_staleness_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_monitoring_interval_days` <a name="reset_monitoring_interval_days" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetMonitoringIntervalDays"></a>

```python
def reset_monitoring_interval_days() -> None
```

##### `reset_staleness_days` <a name="reset_staleness_days" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.resetStalenessDays"></a>

```python
def reset_staleness_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDaysInput">monitoring_interval_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDaysInput">staleness_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDays">monitoring_interval_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDays">staleness_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitoring_interval_days_input`<sup>Optional</sup> <a name="monitoring_interval_days_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDaysInput"></a>

```python
monitoring_interval_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `staleness_days_input`<sup>Optional</sup> <a name="staleness_days_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDaysInput"></a>

```python
staleness_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitoring_interval_days`<sup>Required</sup> <a name="monitoring_interval_days" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.monitoringIntervalDays"></a>

```python
monitoring_interval_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `staleness_days`<sup>Required</sup> <a name="staleness_days" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.stalenessDays"></a>

```python
staleness_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis">VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis</a>

---


### VertexAiFeaturestoreEntitytypeTimeoutsOutputReference <a name="VertexAiFeaturestoreEntitytypeTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vertex_ai_featurestore_entitytype

vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VertexAiFeaturestoreEntitytypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vertexAiFeaturestoreEntitytype.VertexAiFeaturestoreEntitytypeTimeouts">VertexAiFeaturestoreEntitytypeTimeouts</a>]

---



