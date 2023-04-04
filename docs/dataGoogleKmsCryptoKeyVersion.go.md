# `dataGoogleKmsCryptoKeyVersion` Submodule <a name="`dataGoogleKmsCryptoKeyVersion` Submodule" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKeyVersion <a name="DataGoogleKmsCryptoKeyVersion" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key_version google_kms_crypto_key_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokeyversion"

datagooglekmscryptokeyversion.NewDataGoogleKmsCryptoKeyVersion(scope Construct, id *string, config DataGoogleKmsCryptoKeyVersionConfig) DataGoogleKmsCryptoKeyVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig">DataGoogleKmsCryptoKeyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig">DataGoogleKmsCryptoKeyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokeyversion"

datagooglekmscryptokeyversion.DataGoogleKmsCryptoKeyVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokeyversion"

datagooglekmscryptokeyversion.DataGoogleKmsCryptoKeyVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokeyversion"

datagooglekmscryptokeyversion.DataGoogleKmsCryptoKeyVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.protectionLevel">ProtectionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.publicKey">PublicKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList">DataGoogleKmsCryptoKeyVersionPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKeyInput">CryptoKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKey">CryptoKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.version">Version</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.protectionLevel"></a>

```go
func ProtectionLevel() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.publicKey"></a>

```go
func PublicKey() DataGoogleKmsCryptoKeyVersionPublicKeyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList">DataGoogleKmsCryptoKeyVersionPublicKeyList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `CryptoKeyInput`<sup>Optional</sup> <a name="CryptoKeyInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKeyInput"></a>

```go
func CryptoKeyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.cryptoKey"></a>

```go
func CryptoKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeyVersionConfig <a name="DataGoogleKmsCryptoKeyVersionConfig" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokeyversion"

&datagooglekmscryptokeyversion.DataGoogleKmsCryptoKeyVersionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CryptoKey: *string,
	Id: *string,
	Version: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.cryptoKey">CryptoKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key_version#crypto_key DataGoogleKmsCryptoKeyVersion#crypto_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key_version#id DataGoogleKmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.version">Version</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key_version#version DataGoogleKmsCryptoKeyVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.cryptoKey"></a>

```go
CryptoKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key_version#crypto_key DataGoogleKmsCryptoKeyVersion#crypto_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key_version#id DataGoogleKmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionConfig.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key_version#version DataGoogleKmsCryptoKeyVersion#version}.

---

### DataGoogleKmsCryptoKeyVersionPublicKey <a name="DataGoogleKmsCryptoKeyVersionPublicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokeyversion"

&datagooglekmscryptokeyversion.DataGoogleKmsCryptoKeyVersionPublicKey {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeyVersionPublicKeyList <a name="DataGoogleKmsCryptoKeyVersionPublicKeyList" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokeyversion"

datagooglekmscryptokeyversion.NewDataGoogleKmsCryptoKeyVersionPublicKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleKmsCryptoKeyVersionPublicKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.get"></a>

```go
func Get(index *f64) DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference <a name="DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokeyversion"

datagooglekmscryptokeyversion.NewDataGoogleKmsCryptoKeyVersionPublicKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.pem">Pem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey">DataGoogleKmsCryptoKeyVersionPublicKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Pem`<sup>Required</sup> <a name="Pem" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.pem"></a>

```go
func Pem() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleKmsCryptoKeyVersionPublicKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersion.DataGoogleKmsCryptoKeyVersionPublicKey">DataGoogleKmsCryptoKeyVersionPublicKey</a>

---



