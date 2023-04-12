# `dataGoogleAppEngineDefaultServiceAccount` Submodule <a name="`dataGoogleAppEngineDefaultServiceAccount` Submodule" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAppEngineDefaultServiceAccount <a name="DataGoogleAppEngineDefaultServiceAccount" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/app_engine_default_service_account google_app_engine_default_service_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleappenginedefaultserviceaccount"

datagoogleappenginedefaultserviceaccount.NewDataGoogleAppEngineDefaultServiceAccount(scope Construct, id *string, config DataGoogleAppEngineDefaultServiceAccountConfig) DataGoogleAppEngineDefaultServiceAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig">DataGoogleAppEngineDefaultServiceAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig">DataGoogleAppEngineDefaultServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleappenginedefaultserviceaccount"

datagoogleappenginedefaultserviceaccount.DataGoogleAppEngineDefaultServiceAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleappenginedefaultserviceaccount"

datagoogleappenginedefaultserviceaccount.DataGoogleAppEngineDefaultServiceAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleappenginedefaultserviceaccount"

datagoogleappenginedefaultserviceaccount.DataGoogleAppEngineDefaultServiceAccount_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.uniqueId">UniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UniqueId`<sup>Required</sup> <a name="UniqueId" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.uniqueId"></a>

```go
func UniqueId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAppEngineDefaultServiceAccountConfig <a name="DataGoogleAppEngineDefaultServiceAccountConfig" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleappenginedefaultserviceaccount"

&datagoogleappenginedefaultserviceaccount.DataGoogleAppEngineDefaultServiceAccountConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/app_engine_default_service_account#id DataGoogleAppEngineDefaultServiceAccount#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/app_engine_default_service_account#project DataGoogleAppEngineDefaultServiceAccount#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/app_engine_default_service_account#id DataGoogleAppEngineDefaultServiceAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleAppEngineDefaultServiceAccount.DataGoogleAppEngineDefaultServiceAccountConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/app_engine_default_service_account#project DataGoogleAppEngineDefaultServiceAccount#project}.

---



