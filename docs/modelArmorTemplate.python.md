# `modelArmorTemplate` Submodule <a name="`modelArmorTemplate` Submodule" id="@cdktf/provider-google.modelArmorTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelArmorTemplate <a name="ModelArmorTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template google_model_armor_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_config: ModelArmorTemplateFilterConfig,
  location: str,
  template_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  template_metadata: ModelArmorTemplateTemplateMetadata = None,
  timeouts: ModelArmorTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#id ModelArmorTemplate#id}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#project ModelArmorTemplate#project}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.templateMetadata">template_metadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a></code> | template_metadata block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.filterConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#filter_config ModelArmorTemplate#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#location ModelArmorTemplate#location}

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.templateId"></a>

- *Type:* str

Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#template_id ModelArmorTemplate#template_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#id ModelArmorTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#labels ModelArmorTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#project ModelArmorTemplate#project}.

---

##### `template_metadata`<sup>Optional</sup> <a name="template_metadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.templateMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

template_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#template_metadata ModelArmorTemplate#template_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#timeouts ModelArmorTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig">put_filter_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata">put_template_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTemplateMetadata">reset_template_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter_config` <a name="put_filter_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig"></a>

```python
def put_filter_config(
  malicious_uri_filter_settings: ModelArmorTemplateFilterConfigMaliciousUriFilterSettings = None,
  pi_and_jailbreak_filter_settings: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings = None,
  rai_settings: ModelArmorTemplateFilterConfigRaiSettings = None,
  sdp_settings: ModelArmorTemplateFilterConfigSdpSettings = None
) -> None
```

###### `malicious_uri_filter_settings`<sup>Optional</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig.parameter.maliciousUriFilterSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#malicious_uri_filter_settings ModelArmorTemplate#malicious_uri_filter_settings}

---

###### `pi_and_jailbreak_filter_settings`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig.parameter.piAndJailbreakFilterSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#pi_and_jailbreak_filter_settings ModelArmorTemplate#pi_and_jailbreak_filter_settings}

---

###### `rai_settings`<sup>Optional</sup> <a name="rai_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig.parameter.raiSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#rai_settings ModelArmorTemplate#rai_settings}

---

###### `sdp_settings`<sup>Optional</sup> <a name="sdp_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig.parameter.sdpSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#sdp_settings ModelArmorTemplate#sdp_settings}

---

##### `put_template_metadata` <a name="put_template_metadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata"></a>

```python
def put_template_metadata(
  custom_llm_response_safety_error_code: typing.Union[int, float] = None,
  custom_llm_response_safety_error_message: str = None,
  custom_prompt_safety_error_code: typing.Union[int, float] = None,
  custom_prompt_safety_error_message: str = None,
  enforcement_type: str = None,
  ignore_partial_invocation_failures: typing.Union[bool, IResolvable] = None,
  log_sanitize_operations: typing.Union[bool, IResolvable] = None,
  log_template_operations: typing.Union[bool, IResolvable] = None,
  multi_language_detection: ModelArmorTemplateTemplateMetadataMultiLanguageDetection = None
) -> None
```

###### `custom_llm_response_safety_error_code`<sup>Optional</sup> <a name="custom_llm_response_safety_error_code" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.customLlmResponseSafetyErrorCode"></a>

- *Type:* typing.Union[int, float]

Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#custom_llm_response_safety_error_code ModelArmorTemplate#custom_llm_response_safety_error_code}

---

###### `custom_llm_response_safety_error_message`<sup>Optional</sup> <a name="custom_llm_response_safety_error_message" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.customLlmResponseSafetyErrorMessage"></a>

- *Type:* str

Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#custom_llm_response_safety_error_message ModelArmorTemplate#custom_llm_response_safety_error_message}

---

###### `custom_prompt_safety_error_code`<sup>Optional</sup> <a name="custom_prompt_safety_error_code" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.customPromptSafetyErrorCode"></a>

- *Type:* typing.Union[int, float]

Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#custom_prompt_safety_error_code ModelArmorTemplate#custom_prompt_safety_error_code}

---

###### `custom_prompt_safety_error_message`<sup>Optional</sup> <a name="custom_prompt_safety_error_message" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.customPromptSafetyErrorMessage"></a>

- *Type:* str

Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#custom_prompt_safety_error_message ModelArmorTemplate#custom_prompt_safety_error_message}

---

###### `enforcement_type`<sup>Optional</sup> <a name="enforcement_type" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.enforcementType"></a>

- *Type:* str

Possible values: INSPECT_ONLY INSPECT_AND_BLOCK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#enforcement_type ModelArmorTemplate#enforcement_type}

---

###### `ignore_partial_invocation_failures`<sup>Optional</sup> <a name="ignore_partial_invocation_failures" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.ignorePartialInvocationFailures"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, partial detector failures should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#ignore_partial_invocation_failures ModelArmorTemplate#ignore_partial_invocation_failures}

---

###### `log_sanitize_operations`<sup>Optional</sup> <a name="log_sanitize_operations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.logSanitizeOperations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log sanitize operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#log_sanitize_operations ModelArmorTemplate#log_sanitize_operations}

---

###### `log_template_operations`<sup>Optional</sup> <a name="log_template_operations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.logTemplateOperations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log template crud operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#log_template_operations ModelArmorTemplate#log_template_operations}

---

###### `multi_language_detection`<sup>Optional</sup> <a name="multi_language_detection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.multiLanguageDetection"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#multi_language_detection ModelArmorTemplate#multi_language_detection}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#create ModelArmorTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#delete ModelArmorTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#update ModelArmorTemplate#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_template_metadata` <a name="reset_template_metadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTemplateMetadata"></a>

```python
def reset_template_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ModelArmorTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ModelArmorTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ModelArmorTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ModelArmorTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ModelArmorTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference">ModelArmorTemplateFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadata">template_metadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference">ModelArmorTemplateTemplateMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference">ModelArmorTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfigInput">filter_config_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadataInput">template_metadata_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfig"></a>

```python
filter_config: ModelArmorTemplateFilterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference">ModelArmorTemplateFilterConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `template_metadata`<sup>Required</sup> <a name="template_metadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadata"></a>

```python
template_metadata: ModelArmorTemplateTemplateMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference">ModelArmorTemplateTemplateMetadataOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeouts"></a>

```python
timeouts: ModelArmorTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference">ModelArmorTemplateTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `filter_config_input`<sup>Optional</sup> <a name="filter_config_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfigInput"></a>

```python
filter_config_input: ModelArmorTemplateFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `template_metadata_input`<sup>Optional</sup> <a name="template_metadata_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadataInput"></a>

```python
template_metadata_input: ModelArmorTemplateTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ModelArmorTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ModelArmorTemplateConfig <a name="ModelArmorTemplateConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_config: ModelArmorTemplateFilterConfig,
  location: str,
  template_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  template_metadata: ModelArmorTemplateTemplateMetadata = None,
  timeouts: ModelArmorTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateId">template_id</a></code> | <code>str</code> | Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#id ModelArmorTemplate#id}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#project ModelArmorTemplate#project}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateMetadata">template_metadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a></code> | template_metadata block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.filterConfig"></a>

```python
filter_config: ModelArmorTemplateFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#filter_config ModelArmorTemplate#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#location ModelArmorTemplate#location}

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#template_id ModelArmorTemplate#template_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#id ModelArmorTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#labels ModelArmorTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#project ModelArmorTemplate#project}.

---

##### `template_metadata`<sup>Optional</sup> <a name="template_metadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateMetadata"></a>

```python
template_metadata: ModelArmorTemplateTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

template_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#template_metadata ModelArmorTemplate#template_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.timeouts"></a>

```python
timeouts: ModelArmorTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#timeouts ModelArmorTemplate#timeouts}

---

### ModelArmorTemplateFilterConfig <a name="ModelArmorTemplateFilterConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfig(
  malicious_uri_filter_settings: ModelArmorTemplateFilterConfigMaliciousUriFilterSettings = None,
  pi_and_jailbreak_filter_settings: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings = None,
  rai_settings: ModelArmorTemplateFilterConfigRaiSettings = None,
  sdp_settings: ModelArmorTemplateFilterConfigSdpSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.maliciousUriFilterSettings">malicious_uri_filter_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.piAndJailbreakFilterSettings">pi_and_jailbreak_filter_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.raiSettings">rai_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.sdpSettings">sdp_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `malicious_uri_filter_settings`<sup>Optional</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.maliciousUriFilterSettings"></a>

```python
malicious_uri_filter_settings: ModelArmorTemplateFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#malicious_uri_filter_settings ModelArmorTemplate#malicious_uri_filter_settings}

---

##### `pi_and_jailbreak_filter_settings`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.piAndJailbreakFilterSettings"></a>

```python
pi_and_jailbreak_filter_settings: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#pi_and_jailbreak_filter_settings ModelArmorTemplate#pi_and_jailbreak_filter_settings}

---

##### `rai_settings`<sup>Optional</sup> <a name="rai_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.raiSettings"></a>

```python
rai_settings: ModelArmorTemplateFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#rai_settings ModelArmorTemplate#rai_settings}

---

##### `sdp_settings`<sup>Optional</sup> <a name="sdp_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.sdpSettings"></a>

```python
sdp_settings: ModelArmorTemplateFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#sdp_settings ModelArmorTemplate#sdp_settings}

---

### ModelArmorTemplateFilterConfigMaliciousUriFilterSettings <a name="ModelArmorTemplateFilterConfigMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings(
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

### ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings <a name="ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings(
  confidence_level: str = None,
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#confidence_level ModelArmorTemplate#confidence_level}

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

### ModelArmorTemplateFilterConfigRaiSettings <a name="ModelArmorTemplateFilterConfigRaiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings(
  rai_filters: typing.Union[IResolvable, typing.List[ModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings.property.raiFilters">rai_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]</code> | rai_filters block. |

---

##### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings.property.raiFilters"></a>

```python
rai_filters: typing.Union[IResolvable, typing.List[ModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#rai_filters ModelArmorTemplate#rai_filters}

---

### ModelArmorTemplateFilterConfigRaiSettingsRaiFilters <a name="ModelArmorTemplateFilterConfigRaiSettingsRaiFilters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters(
  filter_type: str,
  confidence_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.filterType">filter_type</a></code> | <code>str</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#filter_type ModelArmorTemplate#filter_type}

---

##### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#confidence_level ModelArmorTemplate#confidence_level}

---

### ModelArmorTemplateFilterConfigSdpSettings <a name="ModelArmorTemplateFilterConfigSdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings(
  advanced_config: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig = None,
  basic_config: ModelArmorTemplateFilterConfigSdpSettingsBasicConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.advancedConfig">advanced_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.basicConfig">basic_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `advanced_config`<sup>Optional</sup> <a name="advanced_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.advancedConfig"></a>

```python
advanced_config: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#advanced_config ModelArmorTemplate#advanced_config}

---

##### `basic_config`<sup>Optional</sup> <a name="basic_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.basicConfig"></a>

```python
basic_config: ModelArmorTemplateFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#basic_config ModelArmorTemplate#basic_config}

---

### ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig <a name="ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig(
  deidentify_template: str = None,
  inspect_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization. |

---

##### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.
e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#deidentify_template ModelArmorTemplate#deidentify_template}

---

##### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization.

All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.
e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#inspect_template ModelArmorTemplate#inspect_template}

---

### ModelArmorTemplateFilterConfigSdpSettingsBasicConfig <a name="ModelArmorTemplateFilterConfigSdpSettingsBasicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig(
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

### ModelArmorTemplateTemplateMetadata <a name="ModelArmorTemplateTemplateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateTemplateMetadata(
  custom_llm_response_safety_error_code: typing.Union[int, float] = None,
  custom_llm_response_safety_error_message: str = None,
  custom_prompt_safety_error_code: typing.Union[int, float] = None,
  custom_prompt_safety_error_message: str = None,
  enforcement_type: str = None,
  ignore_partial_invocation_failures: typing.Union[bool, IResolvable] = None,
  log_sanitize_operations: typing.Union[bool, IResolvable] = None,
  log_template_operations: typing.Union[bool, IResolvable] = None,
  multi_language_detection: ModelArmorTemplateTemplateMetadataMultiLanguageDetection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorCode">custom_llm_response_safety_error_code</a></code> | <code>typing.Union[int, float]</code> | Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorMessage">custom_llm_response_safety_error_message</a></code> | <code>str</code> | Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorCode">custom_prompt_safety_error_code</a></code> | <code>typing.Union[int, float]</code> | Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorMessage">custom_prompt_safety_error_message</a></code> | <code>str</code> | Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.enforcementType">enforcement_type</a></code> | <code>str</code> | Possible values: INSPECT_ONLY INSPECT_AND_BLOCK. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.ignorePartialInvocationFailures">ignore_partial_invocation_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, partial detector failures should be ignored. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logSanitizeOperations">log_sanitize_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, log sanitize operations. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logTemplateOperations">log_template_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, log template crud operations. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.multiLanguageDetection">multi_language_detection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `custom_llm_response_safety_error_code`<sup>Optional</sup> <a name="custom_llm_response_safety_error_code" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorCode"></a>

```python
custom_llm_response_safety_error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#custom_llm_response_safety_error_code ModelArmorTemplate#custom_llm_response_safety_error_code}

---

##### `custom_llm_response_safety_error_message`<sup>Optional</sup> <a name="custom_llm_response_safety_error_message" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorMessage"></a>

```python
custom_llm_response_safety_error_message: str
```

- *Type:* str

Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#custom_llm_response_safety_error_message ModelArmorTemplate#custom_llm_response_safety_error_message}

---

##### `custom_prompt_safety_error_code`<sup>Optional</sup> <a name="custom_prompt_safety_error_code" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorCode"></a>

```python
custom_prompt_safety_error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#custom_prompt_safety_error_code ModelArmorTemplate#custom_prompt_safety_error_code}

---

##### `custom_prompt_safety_error_message`<sup>Optional</sup> <a name="custom_prompt_safety_error_message" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorMessage"></a>

```python
custom_prompt_safety_error_message: str
```

- *Type:* str

Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#custom_prompt_safety_error_message ModelArmorTemplate#custom_prompt_safety_error_message}

---

##### `enforcement_type`<sup>Optional</sup> <a name="enforcement_type" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.enforcementType"></a>

```python
enforcement_type: str
```

- *Type:* str

Possible values: INSPECT_ONLY INSPECT_AND_BLOCK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#enforcement_type ModelArmorTemplate#enforcement_type}

---

##### `ignore_partial_invocation_failures`<sup>Optional</sup> <a name="ignore_partial_invocation_failures" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.ignorePartialInvocationFailures"></a>

```python
ignore_partial_invocation_failures: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, partial detector failures should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#ignore_partial_invocation_failures ModelArmorTemplate#ignore_partial_invocation_failures}

---

##### `log_sanitize_operations`<sup>Optional</sup> <a name="log_sanitize_operations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logSanitizeOperations"></a>

```python
log_sanitize_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log sanitize operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#log_sanitize_operations ModelArmorTemplate#log_sanitize_operations}

---

##### `log_template_operations`<sup>Optional</sup> <a name="log_template_operations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logTemplateOperations"></a>

```python
log_template_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log template crud operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#log_template_operations ModelArmorTemplate#log_template_operations}

---

##### `multi_language_detection`<sup>Optional</sup> <a name="multi_language_detection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.multiLanguageDetection"></a>

```python
multi_language_detection: ModelArmorTemplateTemplateMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#multi_language_detection ModelArmorTemplate#multi_language_detection}

---

### ModelArmorTemplateTemplateMetadataMultiLanguageDetection <a name="ModelArmorTemplateTemplateMetadataMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection(
  enable_multi_language_detection: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">enable_multi_language_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, multi language detection will be enabled. |

---

##### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```python
enable_multi_language_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#enable_multi_language_detection ModelArmorTemplate#enable_multi_language_detection}

---

### ModelArmorTemplateTimeouts <a name="ModelArmorTemplateTimeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#create ModelArmorTemplate#create}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#delete ModelArmorTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#update ModelArmorTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#create ModelArmorTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#delete ModelArmorTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#update ModelArmorTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference <a name="ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorTemplateFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---


### ModelArmorTemplateFilterConfigOutputReference <a name="ModelArmorTemplateFilterConfigOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings">put_malicious_uri_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings">put_pi_and_jailbreak_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putRaiSettings">put_rai_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putSdpSettings">put_sdp_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetMaliciousUriFilterSettings">reset_malicious_uri_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">reset_pi_and_jailbreak_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetRaiSettings">reset_rai_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetSdpSettings">reset_sdp_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_malicious_uri_filter_settings` <a name="put_malicious_uri_filter_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```python
def put_malicious_uri_filter_settings(
  filter_enforcement: str = None
) -> None
```

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

##### `put_pi_and_jailbreak_filter_settings` <a name="put_pi_and_jailbreak_filter_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```python
def put_pi_and_jailbreak_filter_settings(
  confidence_level: str = None,
  filter_enforcement: str = None
) -> None
```

###### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.confidenceLevel"></a>

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#confidence_level ModelArmorTemplate#confidence_level}

---

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

##### `put_rai_settings` <a name="put_rai_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putRaiSettings"></a>

```python
def put_rai_settings(
  rai_filters: typing.Union[IResolvable, typing.List[ModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
) -> None
```

###### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putRaiSettings.parameter.raiFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#rai_filters ModelArmorTemplate#rai_filters}

---

##### `put_sdp_settings` <a name="put_sdp_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putSdpSettings"></a>

```python
def put_sdp_settings(
  advanced_config: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig = None,
  basic_config: ModelArmorTemplateFilterConfigSdpSettingsBasicConfig = None
) -> None
```

###### `advanced_config`<sup>Optional</sup> <a name="advanced_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putSdpSettings.parameter.advancedConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#advanced_config ModelArmorTemplate#advanced_config}

---

###### `basic_config`<sup>Optional</sup> <a name="basic_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putSdpSettings.parameter.basicConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#basic_config ModelArmorTemplate#basic_config}

---

##### `reset_malicious_uri_filter_settings` <a name="reset_malicious_uri_filter_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```python
def reset_malicious_uri_filter_settings() -> None
```

##### `reset_pi_and_jailbreak_filter_settings` <a name="reset_pi_and_jailbreak_filter_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```python
def reset_pi_and_jailbreak_filter_settings() -> None
```

##### `reset_rai_settings` <a name="reset_rai_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetRaiSettings"></a>

```python
def reset_rai_settings() -> None
```

##### `reset_sdp_settings` <a name="reset_sdp_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetSdpSettings"></a>

```python
def reset_sdp_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettings">malicious_uri_filter_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettings">pi_and_jailbreak_filter_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettings">rai_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference">ModelArmorTemplateFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettings">sdp_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference">ModelArmorTemplateFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">malicious_uri_filter_settings_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">pi_and_jailbreak_filter_settings_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettingsInput">rai_settings_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettingsInput">sdp_settings_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `malicious_uri_filter_settings`<sup>Required</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```python
malicious_uri_filter_settings: ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `pi_and_jailbreak_filter_settings`<sup>Required</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```python
pi_and_jailbreak_filter_settings: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `rai_settings`<sup>Required</sup> <a name="rai_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettings"></a>

```python
rai_settings: ModelArmorTemplateFilterConfigRaiSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference">ModelArmorTemplateFilterConfigRaiSettingsOutputReference</a>

---

##### `sdp_settings`<sup>Required</sup> <a name="sdp_settings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettings"></a>

```python
sdp_settings: ModelArmorTemplateFilterConfigSdpSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference">ModelArmorTemplateFilterConfigSdpSettingsOutputReference</a>

---

##### `malicious_uri_filter_settings_input`<sup>Optional</sup> <a name="malicious_uri_filter_settings_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```python
malicious_uri_filter_settings_input: ModelArmorTemplateFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---

##### `pi_and_jailbreak_filter_settings_input`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```python
pi_and_jailbreak_filter_settings_input: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `rai_settings_input`<sup>Optional</sup> <a name="rai_settings_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettingsInput"></a>

```python
rai_settings_input: ModelArmorTemplateFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

---

##### `sdp_settings_input`<sup>Optional</sup> <a name="sdp_settings_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettingsInput"></a>

```python
sdp_settings_input: ModelArmorTemplateFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorTemplateFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

---


### ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">reset_confidence_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidence_level` <a name="reset_confidence_level" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```python
def reset_confidence_level() -> None
```

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">confidence_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_level_input`<sup>Optional</sup> <a name="confidence_level_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```python
confidence_level_input: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---


### ModelArmorTemplateFilterConfigRaiSettingsOutputReference <a name="ModelArmorTemplateFilterConfigRaiSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters">put_rai_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rai_filters` <a name="put_rai_filters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```python
def put_rai_filters(
  value: typing.Union[IResolvable, typing.List[ModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFilters">rai_filters</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList">ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">rai_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```python
rai_filters: ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList">ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `rai_filters_input`<sup>Optional</sup> <a name="rai_filters_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```python
rai_filters_input: typing.Union[IResolvable, typing.List[ModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorTemplateFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

---


### ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList <a name="ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]

---


### ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference <a name="ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">reset_confidence_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidence_level` <a name="reset_confidence_level" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```python
def reset_confidence_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">confidence_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_level_input`<sup>Optional</sup> <a name="confidence_level_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```python
confidence_level_input: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelArmorTemplateFilterConfigRaiSettingsRaiFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]

---


### ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">reset_deidentify_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">reset_inspect_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deidentify_template` <a name="reset_deidentify_template" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```python
def reset_deidentify_template() -> None
```

##### `reset_inspect_template` <a name="reset_inspect_template" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```python
def reset_inspect_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">deidentify_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">inspect_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deidentify_template_input`<sup>Optional</sup> <a name="deidentify_template_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```python
deidentify_template_input: str
```

- *Type:* str

---

##### `inspect_template_input`<sup>Optional</sup> <a name="inspect_template_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```python
inspect_template_input: str
```

- *Type:* str

---

##### `deidentify_template`<sup>Required</sup> <a name="deidentify_template" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

---

##### `inspect_template`<sup>Required</sup> <a name="inspect_template" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---


### ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference <a name="ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorTemplateFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---


### ModelArmorTemplateFilterConfigSdpSettingsOutputReference <a name="ModelArmorTemplateFilterConfigSdpSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig">put_advanced_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig">put_basic_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">reset_advanced_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetBasicConfig">reset_basic_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_config` <a name="put_advanced_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```python
def put_advanced_config(
  deidentify_template: str = None,
  inspect_template: str = None
) -> None
```

###### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.deidentifyTemplate"></a>

- *Type:* str

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.
e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#deidentify_template ModelArmorTemplate#deidentify_template}

---

###### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.inspectTemplate"></a>

- *Type:* str

Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization.

All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.
e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#inspect_template ModelArmorTemplate#inspect_template}

---

##### `put_basic_config` <a name="put_basic_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```python
def put_basic_config(
  filter_enforcement: str = None
) -> None
```

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

##### `reset_advanced_config` <a name="reset_advanced_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```python
def reset_advanced_config() -> None
```

##### `reset_basic_config` <a name="reset_basic_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```python
def reset_basic_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfig">advanced_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfig">basic_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">advanced_config_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfigInput">basic_config_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_config`<sup>Required</sup> <a name="advanced_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```python
advanced_config: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `basic_config`<sup>Required</sup> <a name="basic_config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```python
basic_config: ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `advanced_config_input`<sup>Optional</sup> <a name="advanced_config_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```python
advanced_config_input: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `basic_config_input`<sup>Optional</sup> <a name="basic_config_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```python
basic_config_input: ModelArmorTemplateFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorTemplateFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

---


### ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference <a name="ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">enable_multi_language_detection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">enable_multi_language_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_multi_language_detection_input`<sup>Optional</sup> <a name="enable_multi_language_detection_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```python
enable_multi_language_detection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```python
enable_multi_language_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorTemplateTemplateMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---


### ModelArmorTemplateTemplateMetadataOutputReference <a name="ModelArmorTemplateTemplateMetadataOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection">put_multi_language_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorCode">reset_custom_llm_response_safety_error_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorMessage">reset_custom_llm_response_safety_error_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorCode">reset_custom_prompt_safety_error_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorMessage">reset_custom_prompt_safety_error_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetEnforcementType">reset_enforcement_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetIgnorePartialInvocationFailures">reset_ignore_partial_invocation_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogSanitizeOperations">reset_log_sanitize_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogTemplateOperations">reset_log_template_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetMultiLanguageDetection">reset_multi_language_detection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multi_language_detection` <a name="put_multi_language_detection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection"></a>

```python
def put_multi_language_detection(
  enable_multi_language_detection: typing.Union[bool, IResolvable]
) -> None
```

###### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection.parameter.enableMultiLanguageDetection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/model_armor_template#enable_multi_language_detection ModelArmorTemplate#enable_multi_language_detection}

---

##### `reset_custom_llm_response_safety_error_code` <a name="reset_custom_llm_response_safety_error_code" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorCode"></a>

```python
def reset_custom_llm_response_safety_error_code() -> None
```

##### `reset_custom_llm_response_safety_error_message` <a name="reset_custom_llm_response_safety_error_message" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorMessage"></a>

```python
def reset_custom_llm_response_safety_error_message() -> None
```

##### `reset_custom_prompt_safety_error_code` <a name="reset_custom_prompt_safety_error_code" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorCode"></a>

```python
def reset_custom_prompt_safety_error_code() -> None
```

##### `reset_custom_prompt_safety_error_message` <a name="reset_custom_prompt_safety_error_message" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorMessage"></a>

```python
def reset_custom_prompt_safety_error_message() -> None
```

##### `reset_enforcement_type` <a name="reset_enforcement_type" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetEnforcementType"></a>

```python
def reset_enforcement_type() -> None
```

##### `reset_ignore_partial_invocation_failures` <a name="reset_ignore_partial_invocation_failures" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetIgnorePartialInvocationFailures"></a>

```python
def reset_ignore_partial_invocation_failures() -> None
```

##### `reset_log_sanitize_operations` <a name="reset_log_sanitize_operations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogSanitizeOperations"></a>

```python
def reset_log_sanitize_operations() -> None
```

##### `reset_log_template_operations` <a name="reset_log_template_operations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogTemplateOperations"></a>

```python
def reset_log_template_operations() -> None
```

##### `reset_multi_language_detection` <a name="reset_multi_language_detection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetMultiLanguageDetection"></a>

```python
def reset_multi_language_detection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetection">multi_language_detection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference">ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCodeInput">custom_llm_response_safety_error_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessageInput">custom_llm_response_safety_error_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCodeInput">custom_prompt_safety_error_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessageInput">custom_prompt_safety_error_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementTypeInput">enforcement_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailuresInput">ignore_partial_invocation_failures_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperationsInput">log_sanitize_operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperationsInput">log_template_operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetectionInput">multi_language_detection_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCode">custom_llm_response_safety_error_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessage">custom_llm_response_safety_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCode">custom_prompt_safety_error_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessage">custom_prompt_safety_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementType">enforcement_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailures">ignore_partial_invocation_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperations">log_sanitize_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperations">log_template_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multi_language_detection`<sup>Required</sup> <a name="multi_language_detection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetection"></a>

```python
multi_language_detection: ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference">ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference</a>

---

##### `custom_llm_response_safety_error_code_input`<sup>Optional</sup> <a name="custom_llm_response_safety_error_code_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCodeInput"></a>

```python
custom_llm_response_safety_error_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_llm_response_safety_error_message_input`<sup>Optional</sup> <a name="custom_llm_response_safety_error_message_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessageInput"></a>

```python
custom_llm_response_safety_error_message_input: str
```

- *Type:* str

---

##### `custom_prompt_safety_error_code_input`<sup>Optional</sup> <a name="custom_prompt_safety_error_code_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCodeInput"></a>

```python
custom_prompt_safety_error_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_prompt_safety_error_message_input`<sup>Optional</sup> <a name="custom_prompt_safety_error_message_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessageInput"></a>

```python
custom_prompt_safety_error_message_input: str
```

- *Type:* str

---

##### `enforcement_type_input`<sup>Optional</sup> <a name="enforcement_type_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementTypeInput"></a>

```python
enforcement_type_input: str
```

- *Type:* str

---

##### `ignore_partial_invocation_failures_input`<sup>Optional</sup> <a name="ignore_partial_invocation_failures_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailuresInput"></a>

```python
ignore_partial_invocation_failures_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_sanitize_operations_input`<sup>Optional</sup> <a name="log_sanitize_operations_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperationsInput"></a>

```python
log_sanitize_operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_template_operations_input`<sup>Optional</sup> <a name="log_template_operations_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperationsInput"></a>

```python
log_template_operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `multi_language_detection_input`<sup>Optional</sup> <a name="multi_language_detection_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```python
multi_language_detection_input: ModelArmorTemplateTemplateMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---

##### `custom_llm_response_safety_error_code`<sup>Required</sup> <a name="custom_llm_response_safety_error_code" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCode"></a>

```python
custom_llm_response_safety_error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_llm_response_safety_error_message`<sup>Required</sup> <a name="custom_llm_response_safety_error_message" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessage"></a>

```python
custom_llm_response_safety_error_message: str
```

- *Type:* str

---

##### `custom_prompt_safety_error_code`<sup>Required</sup> <a name="custom_prompt_safety_error_code" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCode"></a>

```python
custom_prompt_safety_error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_prompt_safety_error_message`<sup>Required</sup> <a name="custom_prompt_safety_error_message" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessage"></a>

```python
custom_prompt_safety_error_message: str
```

- *Type:* str

---

##### `enforcement_type`<sup>Required</sup> <a name="enforcement_type" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementType"></a>

```python
enforcement_type: str
```

- *Type:* str

---

##### `ignore_partial_invocation_failures`<sup>Required</sup> <a name="ignore_partial_invocation_failures" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailures"></a>

```python
ignore_partial_invocation_failures: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_sanitize_operations`<sup>Required</sup> <a name="log_sanitize_operations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperations"></a>

```python
log_sanitize_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_template_operations`<sup>Required</sup> <a name="log_template_operations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperations"></a>

```python
log_template_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorTemplateTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

---


### ModelArmorTemplateTimeoutsOutputReference <a name="ModelArmorTemplateTimeoutsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_template

modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelArmorTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>]

---



