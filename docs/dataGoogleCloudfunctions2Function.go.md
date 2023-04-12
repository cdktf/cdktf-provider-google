# `dataGoogleCloudfunctions2Function` Submodule <a name="`dataGoogleCloudfunctions2Function` Submodule" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudfunctions2Function <a name="DataGoogleCloudfunctions2Function" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function google_cloudfunctions2_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2Function(scope Construct, id *string, config DataGoogleCloudfunctions2FunctionConfig) DataGoogleCloudfunctions2Function
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig">DataGoogleCloudfunctions2FunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig">DataGoogleCloudfunctions2FunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.DataGoogleCloudfunctions2Function_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.DataGoogleCloudfunctions2Function_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.DataGoogleCloudfunctions2Function_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList">DataGoogleCloudfunctions2FunctionBuildConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList">DataGoogleCloudfunctions2FunctionEventTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.serviceConfig">ServiceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList">DataGoogleCloudfunctions2FunctionServiceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BuildConfig`<sup>Required</sup> <a name="BuildConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.buildConfig"></a>

```go
func BuildConfig() DataGoogleCloudfunctions2FunctionBuildConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList">DataGoogleCloudfunctions2FunctionBuildConfigList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `EventTrigger`<sup>Required</sup> <a name="EventTrigger" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.eventTrigger"></a>

```go
func EventTrigger() DataGoogleCloudfunctions2FunctionEventTriggerList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList">DataGoogleCloudfunctions2FunctionEventTriggerList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ServiceConfig`<sup>Required</sup> <a name="ServiceConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.serviceConfig"></a>

```go
func ServiceConfig() DataGoogleCloudfunctions2FunctionServiceConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList">DataGoogleCloudfunctions2FunctionServiceConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudfunctions2FunctionBuildConfig <a name="DataGoogleCloudfunctions2FunctionBuildConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionBuildConfig {

}
```


### DataGoogleCloudfunctions2FunctionBuildConfigSource <a name="DataGoogleCloudfunctions2FunctionBuildConfigSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionBuildConfigSource {

}
```


### DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource {

}
```


### DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource {

}
```


### DataGoogleCloudfunctions2FunctionConfig <a name="DataGoogleCloudfunctions2FunctionConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.location">Location</a></code> | <code>*string</code> | The location of this cloud function. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.name">Name</a></code> | <code>*string</code> | A user-defined name of the function. Function names must be unique globally and match pattern 'projects/*\/locations/*\/functions/*'. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function#id DataGoogleCloudfunctions2Function#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function#project DataGoogleCloudfunctions2Function#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of this cloud function.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function#location DataGoogleCloudfunctions2Function#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A user-defined name of the function. Function names must be unique globally and match pattern 'projects/*\/locations/*\/functions/*'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function#name DataGoogleCloudfunctions2Function#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function#id DataGoogleCloudfunctions2Function#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/cloudfunctions2_function#project DataGoogleCloudfunctions2Function#project}.

---

### DataGoogleCloudfunctions2FunctionEventTrigger <a name="DataGoogleCloudfunctions2FunctionEventTrigger" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionEventTrigger {

}
```


### DataGoogleCloudfunctions2FunctionEventTriggerEventFilters <a name="DataGoogleCloudfunctions2FunctionEventTriggerEventFilters" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters {

}
```


### DataGoogleCloudfunctions2FunctionServiceConfig <a name="DataGoogleCloudfunctions2FunctionServiceConfig" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionServiceConfig {

}
```


### DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables {

}
```


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes {

}
```


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

&datagooglecloudfunctions2function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudfunctions2FunctionBuildConfigList <a name="DataGoogleCloudfunctions2FunctionBuildConfigList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionBuildConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudfunctions2FunctionBuildConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.get"></a>

```go
func Get(index *f64) DataGoogleCloudfunctions2FunctionBuildConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudfunctions2FunctionBuildConfigOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionBuildConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudfunctions2FunctionBuildConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository">DockerRepository</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint">EntryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.workerPool">WorkerPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig">DataGoogleCloudfunctions2FunctionBuildConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute"></a>

```go
func BuildAttribute() *string
```

- *Type:* *string

---

##### `DockerRepository`<sup>Required</sup> <a name="DockerRepository" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository"></a>

```go
func DockerRepository() *string
```

- *Type:* *string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint"></a>

```go
func EntryPoint() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.source"></a>

```go
func Source() DataGoogleCloudfunctions2FunctionBuildConfigSourceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceList</a>

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.workerPool"></a>

```go
func WorkerPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudfunctions2FunctionBuildConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig">DataGoogleCloudfunctions2FunctionBuildConfig</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceList <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionBuildConfigSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudfunctions2FunctionBuildConfigSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.get"></a>

```go
func Get(index *f64) DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource">DataGoogleCloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepoSource`<sup>Required</sup> <a name="RepoSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource"></a>

```go
func RepoSource() DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList</a>

---

##### `StorageSource`<sup>Required</sup> <a name="StorageSource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource"></a>

```go
func StorageSource() DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudfunctions2FunctionBuildConfigSource
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource">DataGoogleCloudfunctions2FunctionBuildConfigSource</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.get"></a>

```go
func Get(index *f64) DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir">Dir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex">InvertRegex</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName">RepoName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName">TagName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir"></a>

```go
func Dir() *string
```

- *Type:* *string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex"></a>

```go
func InvertRegex() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName"></a>

```go
func RepoName() *string
```

- *Type:* *string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName"></a>

```go
func TagName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.get"></a>

```go
func Get(index *f64) DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---


### DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList <a name="DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get"></a>

```go
func Get(index *f64) DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference <a name="DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters">DataGoogleCloudfunctions2FunctionEventTriggerEventFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudfunctions2FunctionEventTriggerEventFilters
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters">DataGoogleCloudfunctions2FunctionEventTriggerEventFilters</a>

---


### DataGoogleCloudfunctions2FunctionEventTriggerList <a name="DataGoogleCloudfunctions2FunctionEventTriggerList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionEventTriggerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudfunctions2FunctionEventTriggerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.get"></a>

```go
func Get(index *f64) DataGoogleCloudfunctions2FunctionEventTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudfunctions2FunctionEventTriggerOutputReference <a name="DataGoogleCloudfunctions2FunctionEventTriggerOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionEventTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudfunctions2FunctionEventTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters">EventFilters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList">DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.trigger">Trigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion">TriggerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger">DataGoogleCloudfunctions2FunctionEventTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventFilters`<sup>Required</sup> <a name="EventFilters" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters"></a>

```go
func EventFilters() DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList">DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList</a>

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy"></a>

```go
func RetryPolicy() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.trigger"></a>

```go
func Trigger() *string
```

- *Type:* *string

---

##### `TriggerRegion`<sup>Required</sup> <a name="TriggerRegion" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion"></a>

```go
func TriggerRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudfunctions2FunctionEventTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger">DataGoogleCloudfunctions2FunctionEventTrigger</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigList <a name="DataGoogleCloudfunctions2FunctionServiceConfigList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionServiceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudfunctions2FunctionServiceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.get"></a>

```go
func Get(index *f64) DataGoogleCloudfunctions2FunctionServiceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudfunctions2FunctionServiceConfigOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionServiceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudfunctions2FunctionServiceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision">AllTrafficOnLatestRevision</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu">AvailableCpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory">AvailableMemory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri">GcfUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings">IngressSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency">MaxInstanceRequestConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes">SecretVolumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector">VpcConnector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig">DataGoogleCloudfunctions2FunctionServiceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllTrafficOnLatestRevision`<sup>Required</sup> <a name="AllTrafficOnLatestRevision" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision"></a>

```go
func AllTrafficOnLatestRevision() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AvailableCpu`<sup>Required</sup> <a name="AvailableCpu" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu"></a>

```go
func AvailableCpu() *string
```

- *Type:* *string

---

##### `AvailableMemory`<sup>Required</sup> <a name="AvailableMemory" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory"></a>

```go
func AvailableMemory() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GcfUri`<sup>Required</sup> <a name="GcfUri" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri"></a>

```go
func GcfUri() *string
```

- *Type:* *string

---

##### `IngressSettings`<sup>Required</sup> <a name="IngressSettings" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings"></a>

```go
func IngressSettings() *string
```

- *Type:* *string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MaxInstanceRequestConcurrency`<sup>Required</sup> <a name="MaxInstanceRequestConcurrency" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency"></a>

```go
func MaxInstanceRequestConcurrency() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `SecretEnvironmentVariables`<sup>Required</sup> <a name="SecretEnvironmentVariables" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables"></a>

```go
func SecretEnvironmentVariables() DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a>

---

##### `SecretVolumes`<sup>Required</sup> <a name="SecretVolumes" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes"></a>

```go
func SecretVolumes() DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `VpcConnector`<sup>Required</sup> <a name="VpcConnector" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector"></a>

```go
func VpcConnector() *string
```

- *Type:* *string

---

##### `VpcConnectorEgressSettings`<sup>Required</sup> <a name="VpcConnectorEgressSettings" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings"></a>

```go
func VpcConnectorEgressSettings() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudfunctions2FunctionServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig">DataGoogleCloudfunctions2FunctionServiceConfig</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get"></a>

```go
func Get(index *f64) DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions"></a>

```go
func Versions() DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get"></a>

```go
func Get(index *f64) DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecloudfunctions2function"

datagooglecloudfunctions2function.NewDataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>

---



