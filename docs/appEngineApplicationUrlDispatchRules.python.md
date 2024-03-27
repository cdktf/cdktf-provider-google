# `appEngineApplicationUrlDispatchRules` Submodule <a name="`appEngineApplicationUrlDispatchRules` Submodule" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineApplicationUrlDispatchRules <a name="AppEngineApplicationUrlDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dispatch_rules: typing.Union[IResolvable, typing.List[AppEngineApplicationUrlDispatchRulesDispatchRules]],
  id: str = None,
  project: str = None,
  timeouts: AppEngineApplicationUrlDispatchRulesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.dispatchRules">dispatch_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]]</code> | dispatch_rules block. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dispatch_rules`<sup>Required</sup> <a name="dispatch_rules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.dispatchRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]]

dispatch_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#dispatch_rules AppEngineApplicationUrlDispatchRules#dispatch_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#timeouts AppEngineApplicationUrlDispatchRules#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules">put_dispatch_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dispatch_rules` <a name="put_dispatch_rules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules"></a>

```python
def put_dispatch_rules(
  value: typing.Union[IResolvable, typing.List[AppEngineApplicationUrlDispatchRulesDispatchRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppEngineApplicationUrlDispatchRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppEngineApplicationUrlDispatchRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppEngineApplicationUrlDispatchRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppEngineApplicationUrlDispatchRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppEngineApplicationUrlDispatchRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRules">dispatch_rules</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList">AppEngineApplicationUrlDispatchRulesDispatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRulesInput">dispatch_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dispatch_rules`<sup>Required</sup> <a name="dispatch_rules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRules"></a>

```python
dispatch_rules: AppEngineApplicationUrlDispatchRulesDispatchRulesList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList">AppEngineApplicationUrlDispatchRulesDispatchRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeouts"></a>

```python
timeouts: AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a>

---

##### `dispatch_rules_input`<sup>Optional</sup> <a name="dispatch_rules_input" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRulesInput"></a>

```python
dispatch_rules_input: typing.Union[IResolvable, typing.List[AppEngineApplicationUrlDispatchRulesDispatchRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppEngineApplicationUrlDispatchRulesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineApplicationUrlDispatchRulesConfig <a name="AppEngineApplicationUrlDispatchRulesConfig" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dispatch_rules: typing.Union[IResolvable, typing.List[AppEngineApplicationUrlDispatchRulesDispatchRules]],
  id: str = None,
  project: str = None,
  timeouts: AppEngineApplicationUrlDispatchRulesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules">dispatch_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]]</code> | dispatch_rules block. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dispatch_rules`<sup>Required</sup> <a name="dispatch_rules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules"></a>

```python
dispatch_rules: typing.Union[IResolvable, typing.List[AppEngineApplicationUrlDispatchRulesDispatchRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]]

dispatch_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#dispatch_rules AppEngineApplicationUrlDispatchRules#dispatch_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.timeouts"></a>

```python
timeouts: AppEngineApplicationUrlDispatchRulesTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#timeouts AppEngineApplicationUrlDispatchRules#timeouts}

---

### AppEngineApplicationUrlDispatchRulesDispatchRules <a name="AppEngineApplicationUrlDispatchRulesDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules(
  path: str,
  service: str,
  domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.path">path</a></code> | <code>str</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.service">service</a></code> | <code>str</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.domain">domain</a></code> | <code>str</code> | Domain name to match against. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.path"></a>

```python
path: str
```

- *Type:* str

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#path AppEngineApplicationUrlDispatchRules#path}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.service"></a>

```python
service: str
```

- *Type:* str

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#service AppEngineApplicationUrlDispatchRules#service}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.domain"></a>

```python
domain: str
```

- *Type:* str

Domain name to match against.

The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#domain AppEngineApplicationUrlDispatchRules#domain}

---

### AppEngineApplicationUrlDispatchRulesTimeouts <a name="AppEngineApplicationUrlDispatchRulesTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineApplicationUrlDispatchRulesDispatchRulesList <a name="AppEngineApplicationUrlDispatchRulesDispatchRulesList" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppEngineApplicationUrlDispatchRulesDispatchRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]]

---


### AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference <a name="AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain">reset_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppEngineApplicationUrlDispatchRulesDispatchRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>]

---


### AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference <a name="AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_application_url_dispatch_rules

appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppEngineApplicationUrlDispatchRulesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>]

---



