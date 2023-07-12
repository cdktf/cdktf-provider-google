# `google_apigee_endpoint_attachment`

Refer to the Terraform Registory for docs: [`google_apigee_endpoint_attachment`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment).

# `apigeeEndpointAttachment` Submodule <a name="`apigeeEndpointAttachment` Submodule" id="@cdktf/provider-google.apigeeEndpointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEndpointAttachment <a name="ApigeeEndpointAttachment" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment google_apigee_endpoint_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_endpoint_attachment

apigeeEndpointAttachment.ApigeeEndpointAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_attachment_id: str,
  location: str,
  org_id: str,
  service_attachment: str,
  id: str = None,
  timeouts: ApigeeEndpointAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.endpointAttachmentId">endpoint_attachment_id</a></code> | <code>str</code> | ID of the endpoint attachment. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the endpoint attachment. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.serviceAttachment">service_attachment</a></code> | <code>str</code> | Format: projects/*\/regions/*\/serviceAttachments/*. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#id ApigeeEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_attachment_id`<sup>Required</sup> <a name="endpoint_attachment_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.endpointAttachmentId"></a>

- *Type:* str

ID of the endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#endpoint_attachment_id ApigeeEndpointAttachment#endpoint_attachment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.location"></a>

- *Type:* str

Location of the endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#location ApigeeEndpointAttachment#location}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#org_id ApigeeEndpointAttachment#org_id}

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.serviceAttachment"></a>

- *Type:* str

Format: projects/*\/regions/*\/serviceAttachments/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#service_attachment ApigeeEndpointAttachment#service_attachment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#id ApigeeEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#timeouts ApigeeEndpointAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#create ApigeeEndpointAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#delete ApigeeEndpointAttachment#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_endpoint_attachment

apigeeEndpointAttachment.ApigeeEndpointAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_endpoint_attachment

apigeeEndpointAttachment.ApigeeEndpointAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_endpoint_attachment

apigeeEndpointAttachment.ApigeeEndpointAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.connectionState">connection_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference">ApigeeEndpointAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.endpointAttachmentIdInput">endpoint_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.serviceAttachmentInput">service_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.endpointAttachmentId">endpoint_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_state`<sup>Required</sup> <a name="connection_state" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.connectionState"></a>

```python
connection_state: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.timeouts"></a>

```python
timeouts: ApigeeEndpointAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference">ApigeeEndpointAttachmentTimeoutsOutputReference</a>

---

##### `endpoint_attachment_id_input`<sup>Optional</sup> <a name="endpoint_attachment_id_input" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.endpointAttachmentIdInput"></a>

```python
endpoint_attachment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `service_attachment_input`<sup>Optional</sup> <a name="service_attachment_input" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.serviceAttachmentInput"></a>

```python
service_attachment_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeEndpointAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a>]

---

##### `endpoint_attachment_id`<sup>Required</sup> <a name="endpoint_attachment_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.endpointAttachmentId"></a>

```python
endpoint_attachment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEndpointAttachmentConfig <a name="ApigeeEndpointAttachmentConfig" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_endpoint_attachment

apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_attachment_id: str,
  location: str,
  org_id: str,
  service_attachment: str,
  id: str = None,
  timeouts: ApigeeEndpointAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.endpointAttachmentId">endpoint_attachment_id</a></code> | <code>str</code> | ID of the endpoint attachment. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.location">location</a></code> | <code>str</code> | Location of the endpoint attachment. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | Format: projects/*\/regions/*\/serviceAttachments/*. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#id ApigeeEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_attachment_id`<sup>Required</sup> <a name="endpoint_attachment_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.endpointAttachmentId"></a>

```python
endpoint_attachment_id: str
```

- *Type:* str

ID of the endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#endpoint_attachment_id ApigeeEndpointAttachment#endpoint_attachment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#location ApigeeEndpointAttachment#location}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#org_id ApigeeEndpointAttachment#org_id}

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

Format: projects/*\/regions/*\/serviceAttachments/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#service_attachment ApigeeEndpointAttachment#service_attachment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#id ApigeeEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentConfig.property.timeouts"></a>

```python
timeouts: ApigeeEndpointAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#timeouts ApigeeEndpointAttachment#timeouts}

---

### ApigeeEndpointAttachmentTimeouts <a name="ApigeeEndpointAttachmentTimeouts" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_endpoint_attachment

apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#create ApigeeEndpointAttachment#create}. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#delete ApigeeEndpointAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#create ApigeeEndpointAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/apigee_endpoint_attachment#delete ApigeeEndpointAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEndpointAttachmentTimeoutsOutputReference <a name="ApigeeEndpointAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_endpoint_attachment

apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeEndpointAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeEndpointAttachment.ApigeeEndpointAttachmentTimeouts">ApigeeEndpointAttachmentTimeouts</a>]

---



