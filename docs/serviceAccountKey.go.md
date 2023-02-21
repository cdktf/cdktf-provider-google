# `serviceAccountKey` Submodule <a name="`serviceAccountKey` Submodule" id="@cdktf/provider-google.serviceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccountKey <a name="ServiceAccountKey" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/serviceaccountkey"

serviceaccountkey.NewServiceAccountKey(scope Construct, id *string, config ServiceAccountKeyConfig) ServiceAccountKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig">ServiceAccountKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig">ServiceAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeepers">ResetKeepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPrivateKeyType">ResetPrivateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyData">ResetPublicKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyType">ResetPublicKeyType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetId"></a>

```go
func ResetId()
```

##### `ResetKeepers` <a name="ResetKeepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeepers"></a>

```go
func ResetKeepers()
```

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetKeyAlgorithm"></a>

```go
func ResetKeyAlgorithm()
```

##### `ResetPrivateKeyType` <a name="ResetPrivateKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPrivateKeyType"></a>

```go
func ResetPrivateKeyType()
```

##### `ResetPublicKeyData` <a name="ResetPublicKeyData" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyData"></a>

```go
func ResetPublicKeyData()
```

##### `ResetPublicKeyType` <a name="ResetPublicKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.resetPublicKeyType"></a>

```go
func ResetPublicKeyType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/serviceaccountkey"

serviceaccountkey.ServiceAccountKey_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/serviceaccountkey"

serviceaccountkey.ServiceAccountKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/serviceaccountkey"

serviceaccountkey.ServiceAccountKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validAfter">ValidAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validBefore">ValidBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepersInput">KeepersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyTypeInput">PrivateKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyDataInput">PublicKeyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyTypeInput">PublicKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountIdInput">ServiceAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepers">Keepers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyType">PrivateKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyData">PublicKeyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyType">PublicKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `ValidAfter`<sup>Required</sup> <a name="ValidAfter" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validAfter"></a>

```go
func ValidAfter() *string
```

- *Type:* *string

---

##### `ValidBefore`<sup>Required</sup> <a name="ValidBefore" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.validBefore"></a>

```go
func ValidBefore() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeepersInput`<sup>Optional</sup> <a name="KeepersInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepersInput"></a>

```go
func KeepersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithmInput"></a>

```go
func KeyAlgorithmInput() *string
```

- *Type:* *string

---

##### `PrivateKeyTypeInput`<sup>Optional</sup> <a name="PrivateKeyTypeInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyTypeInput"></a>

```go
func PrivateKeyTypeInput() *string
```

- *Type:* *string

---

##### `PublicKeyDataInput`<sup>Optional</sup> <a name="PublicKeyDataInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyDataInput"></a>

```go
func PublicKeyDataInput() *string
```

- *Type:* *string

---

##### `PublicKeyTypeInput`<sup>Optional</sup> <a name="PublicKeyTypeInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyTypeInput"></a>

```go
func PublicKeyTypeInput() *string
```

- *Type:* *string

---

##### `ServiceAccountIdInput`<sup>Optional</sup> <a name="ServiceAccountIdInput" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountIdInput"></a>

```go
func ServiceAccountIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Keepers`<sup>Required</sup> <a name="Keepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keepers"></a>

```go
func Keepers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `PrivateKeyType`<sup>Required</sup> <a name="PrivateKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.privateKeyType"></a>

```go
func PrivateKeyType() *string
```

- *Type:* *string

---

##### `PublicKeyData`<sup>Required</sup> <a name="PublicKeyData" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyData"></a>

```go
func PublicKeyData() *string
```

- *Type:* *string

---

##### `PublicKeyType`<sup>Required</sup> <a name="PublicKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.publicKeyType"></a>

```go
func PublicKeyType() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccountKeyConfig <a name="ServiceAccountKeyConfig" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/serviceaccountkey"

&serviceaccountkey.ServiceAccountKeyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceAccountId: *string,
	Id: *string,
	Keepers: *map[string]*string,
	KeyAlgorithm: *string,
	PrivateKeyType: *string,
	PublicKeyData: *string,
	PublicKeyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | The ID of the parent service account of the key. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_account_key#id ServiceAccountKey#id}. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keepers">Keepers</a></code> | <code>*map[string]*string</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | The algorithm used to generate the key, used only on create. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.privateKeyType">PrivateKeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_account_key#private_key_type ServiceAccountKey#private_key_type}. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyData">PublicKeyData</a></code> | <code>*string</code> | A field that allows clients to upload their own public key. |
| <code><a href="#@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyType">PublicKeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_account_key#public_key_type ServiceAccountKey#public_key_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.serviceAccountId"></a>

```go
ServiceAccountId *string
```

- *Type:* *string

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_account_key#service_account_id ServiceAccountKey#service_account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_account_key#id ServiceAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Keepers`<sup>Optional</sup> <a name="Keepers" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keepers"></a>

```go
Keepers *map[string]*string
```

- *Type:* *map[string]*string

Arbitrary map of values that, when changed, will trigger recreation of resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_account_key#keepers ServiceAccountKey#keepers}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.keyAlgorithm"></a>

```go
KeyAlgorithm *string
```

- *Type:* *string

The algorithm used to generate the key, used only on create.

KEY_ALG_RSA_2048 is the default algorithm. Valid values are: "KEY_ALG_RSA_1024", "KEY_ALG_RSA_2048".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_account_key#key_algorithm ServiceAccountKey#key_algorithm}

---

##### `PrivateKeyType`<sup>Optional</sup> <a name="PrivateKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.privateKeyType"></a>

```go
PrivateKeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_account_key#private_key_type ServiceAccountKey#private_key_type}.

---

##### `PublicKeyData`<sup>Optional</sup> <a name="PublicKeyData" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyData"></a>

```go
PublicKeyData *string
```

- *Type:* *string

A field that allows clients to upload their own public key.

If set, use this public key data to create a service account key for given service account. Please note, the expected format for this field is a base64 encoded X509_PEM.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_account_key#public_key_data ServiceAccountKey#public_key_data}

---

##### `PublicKeyType`<sup>Optional</sup> <a name="PublicKeyType" id="@cdktf/provider-google.serviceAccountKey.ServiceAccountKeyConfig.property.publicKeyType"></a>

```go
PublicKeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_account_key#public_key_type ServiceAccountKey#public_key_type}.

---



