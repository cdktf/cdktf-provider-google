# `dataGoogleTpuTensorflowVersions` Submodule <a name="`dataGoogleTpuTensorflowVersions` Submodule" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleTpuTensorflowVersions <a name="DataGoogleTpuTensorflowVersions" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/tpu_tensorflow_versions google_tpu_tensorflow_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogletputensorflowversions"

datagoogletputensorflowversions.NewDataGoogleTpuTensorflowVersions(scope Construct, id *string, config DataGoogleTpuTensorflowVersionsConfig) DataGoogleTpuTensorflowVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig">DataGoogleTpuTensorflowVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig">DataGoogleTpuTensorflowVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetProject"></a>

```go
func ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogletputensorflowversions"

datagoogletputensorflowversions.DataGoogleTpuTensorflowVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogletputensorflowversions"

datagoogletputensorflowversions.DataGoogleTpuTensorflowVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogletputensorflowversions"

datagoogletputensorflowversions.DataGoogleTpuTensorflowVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.versions">Versions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.versions"></a>

```go
func Versions() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleTpuTensorflowVersionsConfig <a name="DataGoogleTpuTensorflowVersionsConfig" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogletputensorflowversions"

&datagoogletputensorflowversions.DataGoogleTpuTensorflowVersionsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Project: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/tpu_tensorflow_versions#id DataGoogleTpuTensorflowVersions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/tpu_tensorflow_versions#project DataGoogleTpuTensorflowVersions#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/tpu_tensorflow_versions#zone DataGoogleTpuTensorflowVersions#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/tpu_tensorflow_versions#id DataGoogleTpuTensorflowVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/tpu_tensorflow_versions#project DataGoogleTpuTensorflowVersions#project}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/tpu_tensorflow_versions#zone DataGoogleTpuTensorflowVersions#zone}.

---



