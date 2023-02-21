# `kmsSecretCiphertext` Submodule <a name="`kmsSecretCiphertext` Submodule" id="@cdktf/provider-google.kmsSecretCiphertext"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsSecretCiphertext <a name="KmsSecretCiphertext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext google_kms_secret_ciphertext}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmssecretciphertext"

kmssecretciphertext.NewKmsSecretCiphertext(scope Construct, id *string, config KmsSecretCiphertextConfig) KmsSecretCiphertext
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig">KmsSecretCiphertextConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig">KmsSecretCiphertextConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetAdditionalAuthenticatedData">ResetAdditionalAuthenticatedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.putTimeouts"></a>

```go
func PutTimeouts(value KmsSecretCiphertextTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>

---

##### `ResetAdditionalAuthenticatedData` <a name="ResetAdditionalAuthenticatedData" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetAdditionalAuthenticatedData"></a>

```go
func ResetAdditionalAuthenticatedData()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmssecretciphertext"

kmssecretciphertext.KmsSecretCiphertext_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmssecretciphertext"

kmssecretciphertext.KmsSecretCiphertext_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmssecretciphertext"

kmssecretciphertext.KmsSecretCiphertext_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.ciphertext">Ciphertext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference">KmsSecretCiphertextTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedDataInput">AdditionalAuthenticatedDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKeyInput">CryptoKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedData">AdditionalAuthenticatedData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKey">CryptoKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ciphertext`<sup>Required</sup> <a name="Ciphertext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.ciphertext"></a>

```go
func Ciphertext() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeouts"></a>

```go
func Timeouts() KmsSecretCiphertextTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference">KmsSecretCiphertextTimeoutsOutputReference</a>

---

##### `AdditionalAuthenticatedDataInput`<sup>Optional</sup> <a name="AdditionalAuthenticatedDataInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedDataInput"></a>

```go
func AdditionalAuthenticatedDataInput() *string
```

- *Type:* *string

---

##### `CryptoKeyInput`<sup>Optional</sup> <a name="CryptoKeyInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKeyInput"></a>

```go
func CryptoKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalAuthenticatedData`<sup>Required</sup> <a name="AdditionalAuthenticatedData" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedData"></a>

```go
func AdditionalAuthenticatedData() *string
```

- *Type:* *string

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKey"></a>

```go
func CryptoKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsSecretCiphertextConfig <a name="KmsSecretCiphertextConfig" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmssecretciphertext"

&kmssecretciphertext.KmsSecretCiphertextConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CryptoKey: *string,
	Plaintext: *string,
	AdditionalAuthenticatedData: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.cryptoKey">CryptoKey</a></code> | <code>*string</code> | The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.plaintext">Plaintext</a></code> | <code>*string</code> | The plaintext to be encrypted. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.additionalAuthenticatedData">AdditionalAuthenticatedData</a></code> | <code>*string</code> | The additional authenticated data used for integrity checks during encryption and decryption. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#id KmsSecretCiphertext#id}. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.cryptoKey"></a>

```go
CryptoKey *string
```

- *Type:* *string

The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#crypto_key KmsSecretCiphertext#crypto_key}

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

The plaintext to be encrypted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#plaintext KmsSecretCiphertext#plaintext}

---

##### `AdditionalAuthenticatedData`<sup>Optional</sup> <a name="AdditionalAuthenticatedData" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.additionalAuthenticatedData"></a>

```go
AdditionalAuthenticatedData *string
```

- *Type:* *string

The additional authenticated data used for integrity checks during encryption and decryption.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#additional_authenticated_data KmsSecretCiphertext#additional_authenticated_data}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#id KmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.timeouts"></a>

```go
Timeouts KmsSecretCiphertextTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#timeouts KmsSecretCiphertext#timeouts}

---

### KmsSecretCiphertextTimeouts <a name="KmsSecretCiphertextTimeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmssecretciphertext"

&kmssecretciphertext.KmsSecretCiphertextTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#create KmsSecretCiphertext#create}. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#delete KmsSecretCiphertext#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#create KmsSecretCiphertext#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_secret_ciphertext#delete KmsSecretCiphertext#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsSecretCiphertextTimeoutsOutputReference <a name="KmsSecretCiphertextTimeoutsOutputReference" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmssecretciphertext"

kmssecretciphertext.NewKmsSecretCiphertextTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsSecretCiphertextTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



