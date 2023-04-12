# `loggingBillingAccountExclusion` Submodule <a name="`loggingBillingAccountExclusion` Submodule" id="@cdktf/provider-google.loggingBillingAccountExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingBillingAccountExclusion <a name="LoggingBillingAccountExclusion" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_exclusion google_logging_billing_account_exclusion}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountexclusion"

loggingbillingaccountexclusion.NewLoggingBillingAccountExclusion(scope Construct, id *string, config LoggingBillingAccountExclusionConfig) LoggingBillingAccountExclusion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig">LoggingBillingAccountExclusionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig">LoggingBillingAccountExclusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountexclusion"

loggingbillingaccountexclusion.LoggingBillingAccountExclusion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountexclusion"

loggingbillingaccountexclusion.LoggingBillingAccountExclusion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountexclusion"

loggingbillingaccountexclusion.LoggingBillingAccountExclusion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.billingAccountInput">BillingAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.billingAccountInput"></a>

```go
func BillingAccountInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.billingAccount"></a>

```go
func BillingAccount() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingBillingAccountExclusionConfig <a name="LoggingBillingAccountExclusionConfig" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingbillingaccountexclusion"

&loggingbillingaccountexclusion.LoggingBillingAccountExclusionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingAccount: *string,
	Filter: *string,
	Name: *string,
	Description: *string,
	Disabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_exclusion#billing_account LoggingBillingAccountExclusion#billing_account}. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.filter">Filter</a></code> | <code>*string</code> | The filter to apply when excluding logs. Only log entries that match the filter are excluded. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.name">Name</a></code> | <code>*string</code> | The name of the logging exclusion. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether this exclusion rule should be disabled or not. This defaults to false. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_exclusion#id LoggingBillingAccountExclusion#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.billingAccount"></a>

```go
BillingAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_exclusion#billing_account LoggingBillingAccountExclusion#billing_account}.

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter to apply when excluding logs. Only log entries that match the filter are excluded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_exclusion#filter LoggingBillingAccountExclusion#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the logging exclusion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_exclusion#name LoggingBillingAccountExclusion#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_exclusion#description LoggingBillingAccountExclusion#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether this exclusion rule should be disabled or not. This defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_exclusion#disabled LoggingBillingAccountExclusion#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_billing_account_exclusion#id LoggingBillingAccountExclusion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



