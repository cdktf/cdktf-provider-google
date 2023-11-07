# `google_pubsub_subscription_iam_policy`

Refer to the Terraform Registory for docs: [`google_pubsub_subscription_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy).

# `pubsubSubscriptionIamPolicy` Submodule <a name="`pubsubSubscriptionIamPolicy` Submodule" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubSubscriptionIamPolicy <a name="PubsubSubscriptionIamPolicy" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy google_pubsub_subscription_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription_iam_policy

pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_data: str,
  subscription: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#policy_data PubsubSubscriptionIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.subscription">subscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#subscription PubsubSubscriptionIamPolicy#subscription}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#id PubsubSubscriptionIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#project PubsubSubscriptionIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#policy_data PubsubSubscriptionIamPolicy#policy_data}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.subscription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#subscription PubsubSubscriptionIamPolicy#subscription}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#id PubsubSubscriptionIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#project PubsubSubscriptionIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PubsubSubscriptionIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription_iam_policy

pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription_iam_policy

pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription_iam_policy

pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription_iam_policy

pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PubsubSubscriptionIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PubsubSubscriptionIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PubsubSubscriptionIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PubsubSubscriptionIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.subscriptionInput">subscription_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.subscription">subscription</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `subscription_input`<sup>Optional</sup> <a name="subscription_input" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.subscriptionInput"></a>

```python
subscription_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.subscription"></a>

```python
subscription: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubSubscriptionIamPolicyConfig <a name="PubsubSubscriptionIamPolicyConfig" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription_iam_policy

pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_data: str,
  subscription: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#policy_data PubsubSubscriptionIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.subscription">subscription</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#subscription PubsubSubscriptionIamPolicy#subscription}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#id PubsubSubscriptionIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#project PubsubSubscriptionIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#policy_data PubsubSubscriptionIamPolicy#policy_data}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.subscription"></a>

```python
subscription: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#subscription PubsubSubscriptionIamPolicy#subscription}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#id PubsubSubscriptionIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscriptionIamPolicy.PubsubSubscriptionIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/pubsub_subscription_iam_policy#project PubsubSubscriptionIamPolicy#project}.

---



