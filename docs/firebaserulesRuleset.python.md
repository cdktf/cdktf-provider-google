# `firebaserulesRuleset` Submodule <a name="`firebaserulesRuleset` Submodule" id="@cdktf/provider-google.firebaserulesRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaserulesRuleset <a name="FirebaserulesRuleset" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset google_firebaserules_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRuleset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source: FirebaserulesRulesetSource,
  id: str = None,
  project: str = None,
  timeouts: FirebaserulesRulesetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#id FirebaserulesRuleset#id}. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#source FirebaserulesRuleset#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#id FirebaserulesRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#project FirebaserulesRuleset#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#timeouts FirebaserulesRuleset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source` <a name="put_source" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putSource"></a>

```python
def put_source(
  files: typing.Union[IResolvable, typing.List[FirebaserulesRulesetSourceFiles]],
  language: str = None
) -> None
```

###### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putSource.parameter.files"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>]]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#files FirebaserulesRuleset#files}

---

###### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putSource.parameter.language"></a>

- *Type:* str

`Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#language FirebaserulesRuleset#language}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#create FirebaserulesRuleset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#delete FirebaserulesRuleset#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirebaserulesRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRuleset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRuleset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRuleset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRuleset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirebaserulesRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirebaserulesRuleset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirebaserulesRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaserulesRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList">FirebaserulesRulesetMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference">FirebaserulesRulesetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference">FirebaserulesRulesetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.metadata"></a>

```python
metadata: FirebaserulesRulesetMetadataList
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList">FirebaserulesRulesetMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.source"></a>

```python
source: FirebaserulesRulesetSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference">FirebaserulesRulesetSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.timeouts"></a>

```python
timeouts: FirebaserulesRulesetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference">FirebaserulesRulesetTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.sourceInput"></a>

```python
source_input: FirebaserulesRulesetSource
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirebaserulesRulesetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRuleset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaserulesRulesetConfig <a name="FirebaserulesRulesetConfig" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source: FirebaserulesRulesetSource,
  id: str = None,
  project: str = None,
  timeouts: FirebaserulesRulesetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#id FirebaserulesRuleset#id}. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.source"></a>

```python
source: FirebaserulesRulesetSource
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#source FirebaserulesRuleset#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#id FirebaserulesRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#project FirebaserulesRuleset#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetConfig.property.timeouts"></a>

```python
timeouts: FirebaserulesRulesetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#timeouts FirebaserulesRuleset#timeouts}

---

### FirebaserulesRulesetMetadata <a name="FirebaserulesRulesetMetadata" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetMetadata()
```


### FirebaserulesRulesetSource <a name="FirebaserulesRulesetSource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetSource(
  files: typing.Union[IResolvable, typing.List[FirebaserulesRulesetSourceFiles]],
  language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource.property.files">files</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>]]</code> | files block. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource.property.language">language</a></code> | <code>str</code> | `Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource.property.files"></a>

```python
files: typing.Union[IResolvable, typing.List[FirebaserulesRulesetSourceFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>]]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#files FirebaserulesRuleset#files}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource.property.language"></a>

```python
language: str
```

- *Type:* str

`Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#language FirebaserulesRuleset#language}

---

### FirebaserulesRulesetSourceFiles <a name="FirebaserulesRulesetSourceFiles" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetSourceFiles(
  content: str,
  name: str,
  fingerprint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.content">content</a></code> | <code>str</code> | Textual Content. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.name">name</a></code> | <code>str</code> | File name. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.fingerprint">fingerprint</a></code> | <code>str</code> | Fingerprint (e.g. github sha) associated with the `File`. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.content"></a>

```python
content: str
```

- *Type:* str

Textual Content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#content FirebaserulesRuleset#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.name"></a>

```python
name: str
```

- *Type:* str

File name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#name FirebaserulesRuleset#name}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

Fingerprint (e.g. github sha) associated with the `File`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#fingerprint FirebaserulesRuleset#fingerprint}

---

### FirebaserulesRulesetTimeouts <a name="FirebaserulesRulesetTimeouts" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#create FirebaserulesRuleset#create}. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#delete FirebaserulesRuleset#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#create FirebaserulesRuleset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/firebaserules_ruleset#delete FirebaserulesRuleset#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaserulesRulesetMetadataList <a name="FirebaserulesRulesetMetadataList" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaserulesRulesetMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FirebaserulesRulesetMetadataOutputReference <a name="FirebaserulesRulesetMetadataOutputReference" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadata">FirebaserulesRulesetMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadataOutputReference.property.internalValue"></a>

```python
internal_value: FirebaserulesRulesetMetadata
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetMetadata">FirebaserulesRulesetMetadata</a>

---


### FirebaserulesRulesetSourceFilesList <a name="FirebaserulesRulesetSourceFilesList" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetSourceFilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirebaserulesRulesetSourceFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FirebaserulesRulesetSourceFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>]]

---


### FirebaserulesRulesetSourceFilesOutputReference <a name="FirebaserulesRulesetSourceFilesOutputReference" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.resetFingerprint">reset_fingerprint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fingerprint` <a name="reset_fingerprint" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.resetFingerprint"></a>

```python
def reset_fingerprint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fingerprintInput">fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `fingerprint_input`<sup>Optional</sup> <a name="fingerprint_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fingerprintInput"></a>

```python
fingerprint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirebaserulesRulesetSourceFiles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>]

---


### FirebaserulesRulesetSourceOutputReference <a name="FirebaserulesRulesetSourceOutputReference" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.putFiles">put_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.resetLanguage">reset_language</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_files` <a name="put_files" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.putFiles"></a>

```python
def put_files(
  value: typing.Union[IResolvable, typing.List[FirebaserulesRulesetSourceFiles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.putFiles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>]]

---

##### `reset_language` <a name="reset_language" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.resetLanguage"></a>

```python
def reset_language() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.files">files</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList">FirebaserulesRulesetSourceFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.filesInput">files_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.files"></a>

```python
files: FirebaserulesRulesetSourceFilesList
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFilesList">FirebaserulesRulesetSourceFilesList</a>

---

##### `files_input`<sup>Optional</sup> <a name="files_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.filesInput"></a>

```python
files_input: typing.Union[IResolvable, typing.List[FirebaserulesRulesetSourceFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceFiles">FirebaserulesRulesetSourceFiles</a>]]

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSourceOutputReference.property.internalValue"></a>

```python
internal_value: FirebaserulesRulesetSource
```

- *Type:* <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetSource">FirebaserulesRulesetSource</a>

---


### FirebaserulesRulesetTimeoutsOutputReference <a name="FirebaserulesRulesetTimeoutsOutputReference" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firebaserules_ruleset

firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirebaserulesRulesetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firebaserulesRuleset.FirebaserulesRulesetTimeouts">FirebaserulesRulesetTimeouts</a>]

---



