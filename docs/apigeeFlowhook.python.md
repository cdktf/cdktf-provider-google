# `google_apigee_flowhook`

Refer to the Terraform Registory for docs: [`google_apigee_flowhook`](https://www.terraform.io/docs/providers/google/r/apigee_flowhook).

# `apigeeFlowhook` Submodule <a name="`apigeeFlowhook` Submodule" id="@cdktf/provider-google.apigeeFlowhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeFlowhook <a name="ApigeeFlowhook" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook google_apigee_flowhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_flowhook

apigeeFlowhook.ApigeeFlowhook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  environment: str,
  flow_hook_point: str,
  org_id: str,
  sharedflow: str,
  continue_on_error: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  timeouts: ApigeeFlowhookTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.flowHookPoint">flow_hook_point</a></code> | <code>str</code> | Where in the API call flow the flow hook is invoked. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the environment. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.sharedflow">sharedflow</a></code> | <code>str</code> | Id of the Sharedflow attaching to a flowhook point. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.continueOnError">continue_on_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether execution should continue if the flow hook throws an exception. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the flow hook. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#id ApigeeFlowhook#id}. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.environment"></a>

- *Type:* str

The resource ID of the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#environment ApigeeFlowhook#environment}

---

##### `flow_hook_point`<sup>Required</sup> <a name="flow_hook_point" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.flowHookPoint"></a>

- *Type:* str

Where in the API call flow the flow hook is invoked.

Must be one of PreProxyFlowHook, PostProxyFlowHook, PreTargetFlowHook, or PostTargetFlowHook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#flow_hook_point ApigeeFlowhook#flow_hook_point}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#org_id ApigeeFlowhook#org_id}

---

##### `sharedflow`<sup>Required</sup> <a name="sharedflow" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.sharedflow"></a>

- *Type:* str

Id of the Sharedflow attaching to a flowhook point.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#sharedflow ApigeeFlowhook#sharedflow}

---

##### `continue_on_error`<sup>Optional</sup> <a name="continue_on_error" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.continueOnError"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether execution should continue if the flow hook throws an exception.

Set to true to continue execution. Set to false to stop execution if the flow hook throws an exception. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#continue_on_error ApigeeFlowhook#continue_on_error}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.description"></a>

- *Type:* str

Description of the flow hook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#description ApigeeFlowhook#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#id ApigeeFlowhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#timeouts ApigeeFlowhook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.resetContinueOnError">reset_continue_on_error</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#create ApigeeFlowhook#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#delete ApigeeFlowhook#delete}.

---

##### `reset_continue_on_error` <a name="reset_continue_on_error" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.resetContinueOnError"></a>

```python
def reset_continue_on_error() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_flowhook

apigeeFlowhook.ApigeeFlowhook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_flowhook

apigeeFlowhook.ApigeeFlowhook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_flowhook

apigeeFlowhook.ApigeeFlowhook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference">ApigeeFlowhookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.continueOnErrorInput">continue_on_error_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.flowHookPointInput">flow_hook_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.sharedflowInput">sharedflow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.continueOnError">continue_on_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.flowHookPoint">flow_hook_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.sharedflow">sharedflow</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.timeouts"></a>

```python
timeouts: ApigeeFlowhookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference">ApigeeFlowhookTimeoutsOutputReference</a>

---

##### `continue_on_error_input`<sup>Optional</sup> <a name="continue_on_error_input" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.continueOnErrorInput"></a>

```python
continue_on_error_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `flow_hook_point_input`<sup>Optional</sup> <a name="flow_hook_point_input" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.flowHookPointInput"></a>

```python
flow_hook_point_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `sharedflow_input`<sup>Optional</sup> <a name="sharedflow_input" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.sharedflowInput"></a>

```python
sharedflow_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ApigeeFlowhookTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a>, cdktf.IResolvable]

---

##### `continue_on_error`<sup>Required</sup> <a name="continue_on_error" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.continueOnError"></a>

```python
continue_on_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `flow_hook_point`<sup>Required</sup> <a name="flow_hook_point" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.flowHookPoint"></a>

```python
flow_hook_point: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `sharedflow`<sup>Required</sup> <a name="sharedflow" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.sharedflow"></a>

```python
sharedflow: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeFlowhookConfig <a name="ApigeeFlowhookConfig" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_flowhook

apigeeFlowhook.ApigeeFlowhookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  environment: str,
  flow_hook_point: str,
  org_id: str,
  sharedflow: str,
  continue_on_error: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  timeouts: ApigeeFlowhookTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.environment">environment</a></code> | <code>str</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.flowHookPoint">flow_hook_point</a></code> | <code>str</code> | Where in the API call flow the flow hook is invoked. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the environment. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.sharedflow">sharedflow</a></code> | <code>str</code> | Id of the Sharedflow attaching to a flowhook point. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.continueOnError">continue_on_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag that specifies whether execution should continue if the flow hook throws an exception. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.description">description</a></code> | <code>str</code> | Description of the flow hook. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#id ApigeeFlowhook#id}. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The resource ID of the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#environment ApigeeFlowhook#environment}

---

##### `flow_hook_point`<sup>Required</sup> <a name="flow_hook_point" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.flowHookPoint"></a>

```python
flow_hook_point: str
```

- *Type:* str

Where in the API call flow the flow hook is invoked.

Must be one of PreProxyFlowHook, PostProxyFlowHook, PreTargetFlowHook, or PostTargetFlowHook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#flow_hook_point ApigeeFlowhook#flow_hook_point}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#org_id ApigeeFlowhook#org_id}

---

##### `sharedflow`<sup>Required</sup> <a name="sharedflow" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.sharedflow"></a>

```python
sharedflow: str
```

- *Type:* str

Id of the Sharedflow attaching to a flowhook point.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#sharedflow ApigeeFlowhook#sharedflow}

---

##### `continue_on_error`<sup>Optional</sup> <a name="continue_on_error" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.continueOnError"></a>

```python
continue_on_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag that specifies whether execution should continue if the flow hook throws an exception.

Set to true to continue execution. Set to false to stop execution if the flow hook throws an exception. Defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#continue_on_error ApigeeFlowhook#continue_on_error}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the flow hook.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#description ApigeeFlowhook#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#id ApigeeFlowhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookConfig.property.timeouts"></a>

```python
timeouts: ApigeeFlowhookTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#timeouts ApigeeFlowhook#timeouts}

---

### ApigeeFlowhookTimeouts <a name="ApigeeFlowhookTimeouts" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_flowhook

apigeeFlowhook.ApigeeFlowhookTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#create ApigeeFlowhook#create}. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#delete ApigeeFlowhook#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#create ApigeeFlowhook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_flowhook#delete ApigeeFlowhook#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeFlowhookTimeoutsOutputReference <a name="ApigeeFlowhookTimeoutsOutputReference" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_flowhook

apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ApigeeFlowhookTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.apigeeFlowhook.ApigeeFlowhookTimeouts">ApigeeFlowhookTimeouts</a>, cdktf.IResolvable]

---



