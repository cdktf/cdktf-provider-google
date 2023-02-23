# `dataGoogleLoggingSink` Submodule <a name="`dataGoogleLoggingSink` Submodule" id="@cdktf/provider-google.dataGoogleLoggingSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleLoggingSink <a name="DataGoogleLoggingSink" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/logging_sink google_logging_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

datagoogleloggingsink.NewDataGoogleLoggingSink(scope Construct, id *string, config DataGoogleLoggingSinkConfig) DataGoogleLoggingSink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig">DataGoogleLoggingSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig">DataGoogleLoggingSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

datagoogleloggingsink.DataGoogleLoggingSink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

datagoogleloggingsink.DataGoogleLoggingSink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

datagoogleloggingsink.DataGoogleLoggingSink_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList">DataGoogleLoggingSinkBigqueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList">DataGoogleLoggingSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.writerIdentity">WriterIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BigqueryOptions`<sup>Required</sup> <a name="BigqueryOptions" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.bigqueryOptions"></a>

```go
func BigqueryOptions() DataGoogleLoggingSinkBigqueryOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList">DataGoogleLoggingSinkBigqueryOptionsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.exclusions"></a>

```go
func Exclusions() DataGoogleLoggingSinkExclusionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList">DataGoogleLoggingSinkExclusionsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WriterIdentity`<sup>Required</sup> <a name="WriterIdentity" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.writerIdentity"></a>

```go
func WriterIdentity() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleLoggingSinkBigqueryOptions <a name="DataGoogleLoggingSinkBigqueryOptions" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

&datagoogleloggingsink.DataGoogleLoggingSinkBigqueryOptions {

}
```


### DataGoogleLoggingSinkConfig <a name="DataGoogleLoggingSinkConfig" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

&datagoogleloggingsink.DataGoogleLoggingSinkConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.id">Id</a></code> | <code>*string</code> | Required. An identifier for the resource in format: "projects/[PROJECT_ID]/sinks/[SINK_NAME]", "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME]", "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME]", "folders/[FOLDER_ID]/sinks/[SINK_NAME]". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Required. An identifier for the resource in format: "projects/[PROJECT_ID]/sinks/[SINK_NAME]", "organizations/[ORGANIZATION_ID]/sinks/[SINK_NAME]", "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_NAME]", "folders/[FOLDER_ID]/sinks/[SINK_NAME]".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/logging_sink#id DataGoogleLoggingSink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleLoggingSinkExclusions <a name="DataGoogleLoggingSinkExclusions" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

&datagoogleloggingsink.DataGoogleLoggingSinkExclusions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleLoggingSinkBigqueryOptionsList <a name="DataGoogleLoggingSinkBigqueryOptionsList" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

datagoogleloggingsink.NewDataGoogleLoggingSinkBigqueryOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLoggingSinkBigqueryOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.get"></a>

```go
func Get(index *f64) DataGoogleLoggingSinkBigqueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLoggingSinkBigqueryOptionsOutputReference <a name="DataGoogleLoggingSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

datagoogleloggingsink.NewDataGoogleLoggingSinkBigqueryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLoggingSinkBigqueryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptions">DataGoogleLoggingSinkBigqueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```go
func UsePartitionedTables() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLoggingSinkBigqueryOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkBigqueryOptions">DataGoogleLoggingSinkBigqueryOptions</a>

---


### DataGoogleLoggingSinkExclusionsList <a name="DataGoogleLoggingSinkExclusionsList" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

datagoogleloggingsink.NewDataGoogleLoggingSinkExclusionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleLoggingSinkExclusionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.get"></a>

```go
func Get(index *f64) DataGoogleLoggingSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleLoggingSinkExclusionsOutputReference <a name="DataGoogleLoggingSinkExclusionsOutputReference" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingsink"

datagoogleloggingsink.NewDataGoogleLoggingSinkExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleLoggingSinkExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusions">DataGoogleLoggingSinkExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleLoggingSinkExclusions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleLoggingSink.DataGoogleLoggingSinkExclusions">DataGoogleLoggingSinkExclusions</a>

---



