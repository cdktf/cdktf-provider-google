# `dataGoogleKmsCryptoKey` Submodule <a name="`dataGoogleKmsCryptoKey` Submodule" id="@cdktf/provider-google.dataGoogleKmsCryptoKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKey <a name="DataGoogleKmsCryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key google_kms_crypto_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokey"

datagooglekmscryptokey.NewDataGoogleKmsCryptoKey(scope Construct, id *string, config DataGoogleKmsCryptoKeyConfig) DataGoogleKmsCryptoKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig">DataGoogleKmsCryptoKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig">DataGoogleKmsCryptoKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokey"

datagooglekmscryptokey.DataGoogleKmsCryptoKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokey"

datagooglekmscryptokey.DataGoogleKmsCryptoKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokey"

datagooglekmscryptokey.DataGoogleKmsCryptoKey_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.destroyScheduledDuration">DestroyScheduledDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.importOnly">ImportOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.rotationPeriod">RotationPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.skipInitialVersionCreation">SkipInitialVersionCreation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.versionTemplate">VersionTemplate</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList">DataGoogleKmsCryptoKeyVersionTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRingInput">KeyRingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRing">KeyRing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DestroyScheduledDuration`<sup>Required</sup> <a name="DestroyScheduledDuration" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.destroyScheduledDuration"></a>

```go
func DestroyScheduledDuration() *string
```

- *Type:* *string

---

##### `ImportOnly`<sup>Required</sup> <a name="ImportOnly" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.importOnly"></a>

```go
func ImportOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.rotationPeriod"></a>

```go
func RotationPeriod() *string
```

- *Type:* *string

---

##### `SkipInitialVersionCreation`<sup>Required</sup> <a name="SkipInitialVersionCreation" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.skipInitialVersionCreation"></a>

```go
func SkipInitialVersionCreation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VersionTemplate`<sup>Required</sup> <a name="VersionTemplate" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.versionTemplate"></a>

```go
func VersionTemplate() DataGoogleKmsCryptoKeyVersionTemplateList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList">DataGoogleKmsCryptoKeyVersionTemplateList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyRingInput`<sup>Optional</sup> <a name="KeyRingInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRingInput"></a>

```go
func KeyRingInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.keyRing"></a>

```go
func KeyRing() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeyConfig <a name="DataGoogleKmsCryptoKeyConfig" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokey"

&datagooglekmscryptokey.DataGoogleKmsCryptoKeyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KeyRing: *string,
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.keyRing">KeyRing</a></code> | <code>*string</code> | The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.name">Name</a></code> | <code>*string</code> | The resource name for the CryptoKey. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key#id DataGoogleKmsCryptoKey#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.keyRing"></a>

```go
KeyRing *string
```

- *Type:* *string

The KeyRing that this key belongs to. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key#key_ring DataGoogleKmsCryptoKey#key_ring}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name for the CryptoKey.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key#name DataGoogleKmsCryptoKey#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/kms_crypto_key#id DataGoogleKmsCryptoKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleKmsCryptoKeyVersionTemplate <a name="DataGoogleKmsCryptoKeyVersionTemplate" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokey"

&datagooglekmscryptokey.DataGoogleKmsCryptoKeyVersionTemplate {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeyVersionTemplateList <a name="DataGoogleKmsCryptoKeyVersionTemplateList" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokey"

datagooglekmscryptokey.NewDataGoogleKmsCryptoKeyVersionTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleKmsCryptoKeyVersionTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.get"></a>

```go
func Get(index *f64) DataGoogleKmsCryptoKeyVersionTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleKmsCryptoKeyVersionTemplateOutputReference <a name="DataGoogleKmsCryptoKeyVersionTemplateOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglekmscryptokey"

datagooglekmscryptokey.NewDataGoogleKmsCryptoKeyVersionTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleKmsCryptoKeyVersionTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel">ProtectionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate">DataGoogleKmsCryptoKeyVersionTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.protectionLevel"></a>

```go
func ProtectionLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleKmsCryptoKeyVersionTemplate
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKey.DataGoogleKmsCryptoKeyVersionTemplate">DataGoogleKmsCryptoKeyVersionTemplate</a>

---



