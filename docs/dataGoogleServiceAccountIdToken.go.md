# `dataGoogleServiceAccountIdToken` Submodule <a name="`dataGoogleServiceAccountIdToken` Submodule" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountIdToken <a name="DataGoogleServiceAccountIdToken" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token google_service_account_id_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleserviceaccountidtoken"

datagoogleserviceaccountidtoken.NewDataGoogleServiceAccountIdToken(scope Construct, id *string, config DataGoogleServiceAccountIdTokenConfig) DataGoogleServiceAccountIdToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig">DataGoogleServiceAccountIdTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig">DataGoogleServiceAccountIdTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetDelegates">ResetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetIncludeEmail">ResetIncludeEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetTargetServiceAccount">ResetTargetServiceAccount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDelegates` <a name="ResetDelegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetDelegates"></a>

```go
func ResetDelegates()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeEmail` <a name="ResetIncludeEmail" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetIncludeEmail"></a>

```go
func ResetIncludeEmail()
```

##### `ResetTargetServiceAccount` <a name="ResetTargetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.resetTargetServiceAccount"></a>

```go
func ResetTargetServiceAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleserviceaccountidtoken"

datagoogleserviceaccountidtoken.DataGoogleServiceAccountIdToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleserviceaccountidtoken"

datagoogleserviceaccountidtoken.DataGoogleServiceAccountIdToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleserviceaccountidtoken"

datagoogleserviceaccountidtoken.DataGoogleServiceAccountIdToken_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idToken">IdToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegatesInput">DelegatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmailInput">IncludeEmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudienceInput">TargetAudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccountInput">TargetServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegates">Delegates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmail">IncludeEmail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudience">TargetAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idToken"></a>

```go
func IdToken() *string
```

- *Type:* *string

---

##### `DelegatesInput`<sup>Optional</sup> <a name="DelegatesInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegatesInput"></a>

```go
func DelegatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeEmailInput`<sup>Optional</sup> <a name="IncludeEmailInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmailInput"></a>

```go
func IncludeEmailInput() interface{}
```

- *Type:* interface{}

---

##### `TargetAudienceInput`<sup>Optional</sup> <a name="TargetAudienceInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudienceInput"></a>

```go
func TargetAudienceInput() *string
```

- *Type:* *string

---

##### `TargetServiceAccountInput`<sup>Optional</sup> <a name="TargetServiceAccountInput" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccountInput"></a>

```go
func TargetServiceAccountInput() *string
```

- *Type:* *string

---

##### `Delegates`<sup>Required</sup> <a name="Delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.delegates"></a>

```go
func Delegates() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeEmail`<sup>Required</sup> <a name="IncludeEmail" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.includeEmail"></a>

```go
func IncludeEmail() interface{}
```

- *Type:* interface{}

---

##### `TargetAudience`<sup>Required</sup> <a name="TargetAudience" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetAudience"></a>

```go
func TargetAudience() *string
```

- *Type:* *string

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.targetServiceAccount"></a>

```go
func TargetServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountIdTokenConfig <a name="DataGoogleServiceAccountIdTokenConfig" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleserviceaccountidtoken"

&datagoogleserviceaccountidtoken.DataGoogleServiceAccountIdTokenConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TargetAudience: *string,
	Delegates: *[]*string,
	Id: *string,
	IncludeEmail: interface{},
	TargetServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetAudience">TargetAudience</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.delegates">Delegates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token#id DataGoogleServiceAccountIdToken#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.includeEmail">IncludeEmail</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TargetAudience`<sup>Required</sup> <a name="TargetAudience" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetAudience"></a>

```go
TargetAudience *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token#target_audience DataGoogleServiceAccountIdToken#target_audience}.

---

##### `Delegates`<sup>Optional</sup> <a name="Delegates" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.delegates"></a>

```go
Delegates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token#delegates DataGoogleServiceAccountIdToken#delegates}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token#id DataGoogleServiceAccountIdToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeEmail`<sup>Optional</sup> <a name="IncludeEmail" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.includeEmail"></a>

```go
IncludeEmail interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token#include_email DataGoogleServiceAccountIdToken#include_email}.

---

##### `TargetServiceAccount`<sup>Optional</sup> <a name="TargetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountIdToken.DataGoogleServiceAccountIdTokenConfig.property.targetServiceAccount"></a>

```go
TargetServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/service_account_id_token#target_service_account DataGoogleServiceAccountIdToken#target_service_account}.

---



