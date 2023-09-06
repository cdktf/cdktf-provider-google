# `google_service_account_key`

Refer to the Terraform Registory for docs: [`google_service_account_key`](https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key).

# `serviceAccountKey` Submodule <a name="`serviceAccountKey` Submodule" id="@cdktf/provider-google.serviceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccountKey <a name="ServiceAccountKey" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import service_account_key

serviceAccountKey.ServiceAccountKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_account_id: str,
  id: str = None,
  keepers: typing.Mapping[str] = None,
  key_algorithm: str = None,
  private_key_type: str = None,
  public_key_data: str = None,
  public_key_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.serviceAccountId">service_account_id</a></code> | <code>str</code> | The ID of the parent service account of the key. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#id ServiceAccountKey#id}. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | The algorithm used to generate the key, used only on create. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.privateKeyType">private_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#private_key_type ServiceAccountKey#private_key_type}. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.publicKeyData">public_key_data</a></code> | <code>str</code> | A field that allows clients to upload their own public key. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.publicKeyType">public_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#public_key_type ServiceAccountKey#public_key_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.serviceAccountId"></a>

- *Type:* str

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#service_account_id ServiceAccountKey#service_account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#id ServiceAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.keepers"></a>

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger recreation of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#keepers ServiceAccountKey#keepers}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.keyAlgorithm"></a>

- *Type:* str

The algorithm used to generate the key, used only on create.

KEY_ALG_RSA_2048 is the default algorithm. Valid values are: "KEY_ALG_RSA_1024", "KEY_ALG_RSA_2048".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#key_algorithm ServiceAccountKey#key_algorithm}

---

##### `private_key_type`<sup>Optional</sup> <a name="private_key_type" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.privateKeyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#private_key_type ServiceAccountKey#private_key_type}.

---

##### `public_key_data`<sup>Optional</sup> <a name="public_key_data" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.publicKeyData"></a>

- *Type:* str

A field that allows clients to upload their own public key.

If set, use this public key data to create a service account key for given service account. Please note, the expected format for this field is a base64 encoded X509_PEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#public_key_data ServiceAccountKey#public_key_data}

---

##### `public_key_type`<sup>Optional</sup> <a name="public_key_type" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.publicKeyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#public_key_type ServiceAccountKey#public_key_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeepers">reset_keepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeyAlgorithm">reset_key_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPrivateKeyType">reset_private_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyData">reset_public_key_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyType">reset_public_key_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_keepers` <a name="reset_keepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeepers"></a>

```python
def reset_keepers() -> None
```

##### `reset_key_algorithm` <a name="reset_key_algorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeyAlgorithm"></a>

```python
def reset_key_algorithm() -> None
```

##### `reset_private_key_type` <a name="reset_private_key_type" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPrivateKeyType"></a>

```python
def reset_private_key_type() -> None
```

##### `reset_public_key_data` <a name="reset_public_key_data" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyData"></a>

```python
def reset_public_key_data() -> None
```

##### `reset_public_key_type` <a name="reset_public_key_type" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyType"></a>

```python
def reset_public_key_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import service_account_key

serviceAccountKey.ServiceAccountKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import service_account_key

serviceAccountKey.ServiceAccountKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import service_account_key

serviceAccountKey.ServiceAccountKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validAfter">valid_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validBefore">valid_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepersInput">keepers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyTypeInput">private_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyDataInput">public_key_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyTypeInput">public_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountIdInput">service_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyType">private_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyData">public_key_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyType">public_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `valid_after`<sup>Required</sup> <a name="valid_after" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validAfter"></a>

```python
valid_after: str
```

- *Type:* str

---

##### `valid_before`<sup>Required</sup> <a name="valid_before" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validBefore"></a>

```python
valid_before: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `keepers_input`<sup>Optional</sup> <a name="keepers_input" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepersInput"></a>

```python
keepers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `private_key_type_input`<sup>Optional</sup> <a name="private_key_type_input" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyTypeInput"></a>

```python
private_key_type_input: str
```

- *Type:* str

---

##### `public_key_data_input`<sup>Optional</sup> <a name="public_key_data_input" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyDataInput"></a>

```python
public_key_data_input: str
```

- *Type:* str

---

##### `public_key_type_input`<sup>Optional</sup> <a name="public_key_type_input" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyTypeInput"></a>

```python
public_key_type_input: str
```

- *Type:* str

---

##### `service_account_id_input`<sup>Optional</sup> <a name="service_account_id_input" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountIdInput"></a>

```python
service_account_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepers"></a>

```python
keepers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `private_key_type`<sup>Required</sup> <a name="private_key_type" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyType"></a>

```python
private_key_type: str
```

- *Type:* str

---

##### `public_key_data`<sup>Required</sup> <a name="public_key_data" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyData"></a>

```python
public_key_data: str
```

- *Type:* str

---

##### `public_key_type`<sup>Required</sup> <a name="public_key_type" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyType"></a>

```python
public_key_type: str
```

- *Type:* str

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccountKeyConfig <a name="ServiceAccountKeyConfig" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import service_account_key

serviceAccountKey.ServiceAccountKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_account_id: str,
  id: str = None,
  keepers: typing.Mapping[str] = None,
  key_algorithm: str = None,
  private_key_type: str = None,
  public_key_data: str = None,
  public_key_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | The ID of the parent service account of the key. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#id ServiceAccountKey#id}. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | The algorithm used to generate the key, used only on create. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.privateKeyType">private_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#private_key_type ServiceAccountKey#private_key_type}. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyData">public_key_data</a></code> | <code>str</code> | A field that allows clients to upload their own public key. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyType">public_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#public_key_type ServiceAccountKey#public_key_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#service_account_id ServiceAccountKey#service_account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#id ServiceAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keepers"></a>

```python
keepers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger recreation of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#keepers ServiceAccountKey#keepers}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

The algorithm used to generate the key, used only on create.

KEY_ALG_RSA_2048 is the default algorithm. Valid values are: "KEY_ALG_RSA_1024", "KEY_ALG_RSA_2048".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#key_algorithm ServiceAccountKey#key_algorithm}

---

##### `private_key_type`<sup>Optional</sup> <a name="private_key_type" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.privateKeyType"></a>

```python
private_key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#private_key_type ServiceAccountKey#private_key_type}.

---

##### `public_key_data`<sup>Optional</sup> <a name="public_key_data" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyData"></a>

```python
public_key_data: str
```

- *Type:* str

A field that allows clients to upload their own public key.

If set, use this public key data to create a service account key for given service account. Please note, the expected format for this field is a base64 encoded X509_PEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#public_key_data ServiceAccountKey#public_key_data}

---

##### `public_key_type`<sup>Optional</sup> <a name="public_key_type" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyType"></a>

```python
public_key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/service_account_key#public_key_type ServiceAccountKey#public_key_type}.

---



