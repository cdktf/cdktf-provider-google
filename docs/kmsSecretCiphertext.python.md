# `google_kms_secret_ciphertext`

Refer to the Terraform Registory for docs: [`google_kms_secret_ciphertext`](https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext).

# `kmsSecretCiphertext` Submodule <a name="`kmsSecretCiphertext` Submodule" id="@cdktf/provider-google.kmsSecretCiphertext"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsSecretCiphertext <a name="KmsSecretCiphertext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext google_kms_secret_ciphertext}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_secret_ciphertext

kmsSecretCiphertext.KmsSecretCiphertext(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_key: str,
  plaintext: str,
  additional_authenticated_data: str = None,
  id: str = None,
  timeouts: KmsSecretCiphertextTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.cryptoKey">crypto_key</a></code> | <code>str</code> | The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.plaintext">plaintext</a></code> | <code>str</code> | The plaintext to be encrypted. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.additionalAuthenticatedData">additional_authenticated_data</a></code> | <code>str</code> | The additional authenticated data used for integrity checks during encryption and decryption. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#id KmsSecretCiphertext#id}. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.cryptoKey"></a>

- *Type:* str

The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#crypto_key KmsSecretCiphertext#crypto_key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.plaintext"></a>

- *Type:* str

The plaintext to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#plaintext KmsSecretCiphertext#plaintext}

---

##### `additional_authenticated_data`<sup>Optional</sup> <a name="additional_authenticated_data" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.additionalAuthenticatedData"></a>

- *Type:* str

The additional authenticated data used for integrity checks during encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#additional_authenticated_data KmsSecretCiphertext#additional_authenticated_data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#id KmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#timeouts KmsSecretCiphertext#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetAdditionalAuthenticatedData">reset_additional_authenticated_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#create KmsSecretCiphertext#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#delete KmsSecretCiphertext#delete}.

---

##### `reset_additional_authenticated_data` <a name="reset_additional_authenticated_data" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetAdditionalAuthenticatedData"></a>

```python
def reset_additional_authenticated_data() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import kms_secret_ciphertext

kmsSecretCiphertext.KmsSecretCiphertext.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import kms_secret_ciphertext

kmsSecretCiphertext.KmsSecretCiphertext.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import kms_secret_ciphertext

kmsSecretCiphertext.KmsSecretCiphertext.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.ciphertext">ciphertext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference">KmsSecretCiphertextTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedDataInput">additional_authenticated_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKeyInput">crypto_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedData">additional_authenticated_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKey">crypto_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.ciphertext"></a>

```python
ciphertext: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeouts"></a>

```python
timeouts: KmsSecretCiphertextTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference">KmsSecretCiphertextTimeoutsOutputReference</a>

---

##### `additional_authenticated_data_input`<sup>Optional</sup> <a name="additional_authenticated_data_input" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedDataInput"></a>

```python
additional_authenticated_data_input: str
```

- *Type:* str

---

##### `crypto_key_input`<sup>Optional</sup> <a name="crypto_key_input" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKeyInput"></a>

```python
crypto_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[KmsSecretCiphertextTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>, cdktf.IResolvable]

---

##### `additional_authenticated_data`<sup>Required</sup> <a name="additional_authenticated_data" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedData"></a>

```python
additional_authenticated_data: str
```

- *Type:* str

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKey"></a>

```python
crypto_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsSecretCiphertextConfig <a name="KmsSecretCiphertextConfig" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_secret_ciphertext

kmsSecretCiphertext.KmsSecretCiphertextConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_key: str,
  plaintext: str,
  additional_authenticated_data: str = None,
  id: str = None,
  timeouts: KmsSecretCiphertextTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.cryptoKey">crypto_key</a></code> | <code>str</code> | The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.plaintext">plaintext</a></code> | <code>str</code> | The plaintext to be encrypted. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.additionalAuthenticatedData">additional_authenticated_data</a></code> | <code>str</code> | The additional authenticated data used for integrity checks during encryption and decryption. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#id KmsSecretCiphertext#id}. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.cryptoKey"></a>

```python
crypto_key: str
```

- *Type:* str

The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#crypto_key KmsSecretCiphertext#crypto_key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

The plaintext to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#plaintext KmsSecretCiphertext#plaintext}

---

##### `additional_authenticated_data`<sup>Optional</sup> <a name="additional_authenticated_data" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.additionalAuthenticatedData"></a>

```python
additional_authenticated_data: str
```

- *Type:* str

The additional authenticated data used for integrity checks during encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#additional_authenticated_data KmsSecretCiphertext#additional_authenticated_data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#id KmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.timeouts"></a>

```python
timeouts: KmsSecretCiphertextTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#timeouts KmsSecretCiphertext#timeouts}

---

### KmsSecretCiphertextTimeouts <a name="KmsSecretCiphertextTimeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_secret_ciphertext

kmsSecretCiphertext.KmsSecretCiphertextTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#create KmsSecretCiphertext#create}. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#delete KmsSecretCiphertext#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#create KmsSecretCiphertext#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_secret_ciphertext#delete KmsSecretCiphertext#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsSecretCiphertextTimeoutsOutputReference <a name="KmsSecretCiphertextTimeoutsOutputReference" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_secret_ciphertext

kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KmsSecretCiphertextTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>, cdktf.IResolvable]

---



