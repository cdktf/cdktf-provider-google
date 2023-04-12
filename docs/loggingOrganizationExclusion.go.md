# `loggingOrganizationExclusion` Submodule <a name="`loggingOrganizationExclusion` Submodule" id="@cdktf/provider-google.loggingOrganizationExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingOrganizationExclusion <a name="LoggingOrganizationExclusion" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_organization_exclusion google_logging_organization_exclusion}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationexclusion"

loggingorganizationexclusion.NewLoggingOrganizationExclusion(scope Construct, id *string, config LoggingOrganizationExclusionConfig) LoggingOrganizationExclusion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig">LoggingOrganizationExclusionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig">LoggingOrganizationExclusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationexclusion"

loggingorganizationexclusion.LoggingOrganizationExclusion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationexclusion"

loggingorganizationexclusion.LoggingOrganizationExclusion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationexclusion"

loggingorganizationexclusion.LoggingOrganizationExclusion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingOrganizationExclusionConfig <a name="LoggingOrganizationExclusionConfig" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/loggingorganizationexclusion"

&loggingorganizationexclusion.LoggingOrganizationExclusionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	Name: *string,
	OrgId: *string,
	Description: *string,
	Disabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.filter">Filter</a></code> | <code>*string</code> | The filter to apply when excluding logs. Only log entries that match the filter are excluded. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.name">Name</a></code> | <code>*string</code> | The name of the logging exclusion. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.orgId">OrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_exclusion#org_id LoggingOrganizationExclusion#org_id}. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether this exclusion rule should be disabled or not. This defaults to false. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_exclusion#id LoggingOrganizationExclusion#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter to apply when excluding logs. Only log entries that match the filter are excluded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_exclusion#filter LoggingOrganizationExclusion#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the logging exclusion.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_exclusion#name LoggingOrganizationExclusion#name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_exclusion#org_id LoggingOrganizationExclusion#org_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_exclusion#description LoggingOrganizationExclusion#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether this exclusion rule should be disabled or not. This defaults to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_exclusion#disabled LoggingOrganizationExclusion#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingOrganizationExclusion.LoggingOrganizationExclusionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_organization_exclusion#id LoggingOrganizationExclusion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



