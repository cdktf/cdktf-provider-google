# `iamDenyPolicy` Submodule <a name="`iamDenyPolicy` Submodule" id="@cdktf/provider-google.iamDenyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamDenyPolicy <a name="IamDenyPolicy" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy google_iam_deny_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  rules: typing.Union[IResolvable, typing.List[IamDenyPolicyRules]],
  display_name: str = None,
  id: str = None,
  timeouts: IamDenyPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#name IamDenyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.parent"></a>

- *Type:* str

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#parent IamDenyPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#rules IamDenyPolicy#rules}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#display_name IamDenyPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#timeouts IamDenyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[IamDenyPolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#create IamDenyPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#delete IamDenyPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#update IamDenyPolicy#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamDenyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamDenyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamDenyPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamDenyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamDenyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList">IamDenyPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference">IamDenyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rules"></a>

```python
rules: IamDenyPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList">IamDenyPolicyRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeouts"></a>

```python
timeouts: IamDenyPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference">IamDenyPolicyTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[IamDenyPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IamDenyPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamDenyPolicyConfig <a name="IamDenyPolicyConfig" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  rules: typing.Union[IResolvable, typing.List[IamDenyPolicyRules]],
  display_name: str = None,
  id: str = None,
  timeouts: IamDenyPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.name">name</a></code> | <code>str</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.parent">parent</a></code> | <code>str</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#name IamDenyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#parent IamDenyPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[IamDenyPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#rules IamDenyPolicy#rules}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#display_name IamDenyPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.timeouts"></a>

```python
timeouts: IamDenyPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#timeouts IamDenyPolicy#timeouts}

---

### IamDenyPolicyRules <a name="IamDenyPolicyRules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicyRules(
  deny_rule: IamDenyPolicyRulesDenyRule = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.denyRule">deny_rule</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | deny_rule block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.description">description</a></code> | <code>str</code> | The description of the rule. |

---

##### `deny_rule`<sup>Optional</sup> <a name="deny_rule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.denyRule"></a>

```python
deny_rule: IamDenyPolicyRulesDenyRule
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

deny_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#deny_rule IamDenyPolicy#deny_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#description IamDenyPolicy#description}

---

### IamDenyPolicyRulesDenyRule <a name="IamDenyPolicyRulesDenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicyRulesDenyRule(
  denial_condition: IamDenyPolicyRulesDenyRuleDenialCondition = None,
  denied_permissions: typing.List[str] = None,
  denied_principals: typing.List[str] = None,
  exception_permissions: typing.List[str] = None,
  exception_principals: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.denialCondition">denial_condition</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | denial_condition block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPermissions">denied_permissions</a></code> | <code>typing.List[str]</code> | The permissions that are explicitly denied by this rule. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPrincipals">denied_principals</a></code> | <code>typing.List[str]</code> | The identities that are prevented from using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPermissions">exception_permissions</a></code> | <code>typing.List[str]</code> | Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPrincipals">exception_principals</a></code> | <code>typing.List[str]</code> | The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals. |

---

##### `denial_condition`<sup>Optional</sup> <a name="denial_condition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.denialCondition"></a>

```python
denial_condition: IamDenyPolicyRulesDenyRuleDenialCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

denial_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#denial_condition IamDenyPolicy#denial_condition}

---

##### `denied_permissions`<sup>Optional</sup> <a name="denied_permissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPermissions"></a>

```python
denied_permissions: typing.List[str]
```

- *Type:* typing.List[str]

The permissions that are explicitly denied by this rule.

Each permission uses the format '{service-fqdn}/{resource}.{verb}',
where '{service-fqdn}' is the fully qualified domain name for the service. For example, 'iam.googleapis.com/roles.list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#denied_permissions IamDenyPolicy#denied_permissions}

---

##### `denied_principals`<sup>Optional</sup> <a name="denied_principals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPrincipals"></a>

```python
denied_principals: typing.List[str]
```

- *Type:* typing.List[str]

The identities that are prevented from using one or more permissions on Google Cloud resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#denied_principals IamDenyPolicy#denied_principals}

---

##### `exception_permissions`<sup>Optional</sup> <a name="exception_permissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPermissions"></a>

```python
exception_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.

If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#exception_permissions IamDenyPolicy#exception_permissions}

---

##### `exception_principals`<sup>Optional</sup> <a name="exception_principals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPrincipals"></a>

```python
exception_principals: typing.List[str]
```

- *Type:* typing.List[str]

The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.

For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#exception_principals IamDenyPolicy#exception_principals}

---

### IamDenyPolicyRulesDenyRuleDenialCondition <a name="IamDenyPolicyRulesDenyRuleDenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#expression IamDenyPolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#description IamDenyPolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#location IamDenyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#title IamDenyPolicy#title}

---

### IamDenyPolicyTimeouts <a name="IamDenyPolicyTimeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#create IamDenyPolicy#create}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#delete IamDenyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#update IamDenyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#create IamDenyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#delete IamDenyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#update IamDenyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamDenyPolicyRulesDenyRuleDenialConditionOutputReference <a name="IamDenyPolicyRulesDenyRuleDenialConditionOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue"></a>

```python
internal_value: IamDenyPolicyRulesDenyRuleDenialCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---


### IamDenyPolicyRulesDenyRuleOutputReference <a name="IamDenyPolicyRulesDenyRuleOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition">put_denial_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition">reset_denial_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions">reset_denied_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals">reset_denied_principals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions">reset_exception_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals">reset_exception_principals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_denial_condition` <a name="put_denial_condition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition"></a>

```python
def put_denial_condition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#expression IamDenyPolicy#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#description IamDenyPolicy#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#location IamDenyPolicy#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#title IamDenyPolicy#title}

---

##### `reset_denial_condition` <a name="reset_denial_condition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition"></a>

```python
def reset_denial_condition() -> None
```

##### `reset_denied_permissions` <a name="reset_denied_permissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions"></a>

```python
def reset_denied_permissions() -> None
```

##### `reset_denied_principals` <a name="reset_denied_principals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals"></a>

```python
def reset_denied_principals() -> None
```

##### `reset_exception_permissions` <a name="reset_exception_permissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions"></a>

```python
def reset_exception_permissions() -> None
```

##### `reset_exception_principals` <a name="reset_exception_principals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals"></a>

```python
def reset_exception_principals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition">denial_condition</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference">IamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput">denial_condition_input</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput">denied_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput">denied_principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput">exception_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput">exception_principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions">denied_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals">denied_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions">exception_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals">exception_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `denial_condition`<sup>Required</sup> <a name="denial_condition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition"></a>

```python
denial_condition: IamDenyPolicyRulesDenyRuleDenialConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference">IamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a>

---

##### `denial_condition_input`<sup>Optional</sup> <a name="denial_condition_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput"></a>

```python
denial_condition_input: IamDenyPolicyRulesDenyRuleDenialCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `denied_permissions_input`<sup>Optional</sup> <a name="denied_permissions_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput"></a>

```python
denied_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_principals_input`<sup>Optional</sup> <a name="denied_principals_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput"></a>

```python
denied_principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exception_permissions_input`<sup>Optional</sup> <a name="exception_permissions_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput"></a>

```python
exception_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exception_principals_input`<sup>Optional</sup> <a name="exception_principals_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput"></a>

```python
exception_principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_permissions`<sup>Required</sup> <a name="denied_permissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions"></a>

```python
denied_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_principals`<sup>Required</sup> <a name="denied_principals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals"></a>

```python
denied_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exception_permissions`<sup>Required</sup> <a name="exception_permissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions"></a>

```python
exception_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exception_principals`<sup>Required</sup> <a name="exception_principals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals"></a>

```python
exception_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.internalValue"></a>

```python
internal_value: IamDenyPolicyRulesDenyRule
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---


### IamDenyPolicyRulesList <a name="IamDenyPolicyRulesList" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamDenyPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IamDenyPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]]

---


### IamDenyPolicyRulesOutputReference <a name="IamDenyPolicyRulesOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule">put_deny_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDenyRule">reset_deny_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_deny_rule` <a name="put_deny_rule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule"></a>

```python
def put_deny_rule(
  denial_condition: IamDenyPolicyRulesDenyRuleDenialCondition = None,
  denied_permissions: typing.List[str] = None,
  denied_principals: typing.List[str] = None,
  exception_permissions: typing.List[str] = None,
  exception_principals: typing.List[str] = None
) -> None
```

###### `denial_condition`<sup>Optional</sup> <a name="denial_condition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule.parameter.denialCondition"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

denial_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#denial_condition IamDenyPolicy#denial_condition}

---

###### `denied_permissions`<sup>Optional</sup> <a name="denied_permissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule.parameter.deniedPermissions"></a>

- *Type:* typing.List[str]

The permissions that are explicitly denied by this rule.

Each permission uses the format '{service-fqdn}/{resource}.{verb}',
where '{service-fqdn}' is the fully qualified domain name for the service. For example, 'iam.googleapis.com/roles.list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#denied_permissions IamDenyPolicy#denied_permissions}

---

###### `denied_principals`<sup>Optional</sup> <a name="denied_principals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule.parameter.deniedPrincipals"></a>

- *Type:* typing.List[str]

The identities that are prevented from using one or more permissions on Google Cloud resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#denied_principals IamDenyPolicy#denied_principals}

---

###### `exception_permissions`<sup>Optional</sup> <a name="exception_permissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule.parameter.exceptionPermissions"></a>

- *Type:* typing.List[str]

Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.

If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#exception_permissions IamDenyPolicy#exception_permissions}

---

###### `exception_principals`<sup>Optional</sup> <a name="exception_principals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule.parameter.exceptionPrincipals"></a>

- *Type:* typing.List[str]

The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.

For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#exception_principals IamDenyPolicy#exception_principals}

---

##### `reset_deny_rule` <a name="reset_deny_rule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDenyRule"></a>

```python
def reset_deny_rule() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRule">deny_rule</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference">IamDenyPolicyRulesDenyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRuleInput">deny_rule_input</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deny_rule`<sup>Required</sup> <a name="deny_rule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRule"></a>

```python
deny_rule: IamDenyPolicyRulesDenyRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference">IamDenyPolicyRulesDenyRuleOutputReference</a>

---

##### `deny_rule_input`<sup>Optional</sup> <a name="deny_rule_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRuleInput"></a>

```python
deny_rule_input: IamDenyPolicyRulesDenyRule
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamDenyPolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules">IamDenyPolicyRules</a>]

---


### IamDenyPolicyTimeoutsOutputReference <a name="IamDenyPolicyTimeoutsOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_deny_policy

iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamDenyPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>]

---



