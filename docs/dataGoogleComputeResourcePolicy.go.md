# `dataGoogleComputeResourcePolicy` Submodule <a name="`dataGoogleComputeResourcePolicy` Submodule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeResourcePolicy <a name="DataGoogleComputeResourcePolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/compute_resource_policy google_compute_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicy(scope Construct, id *string, config DataGoogleComputeResourcePolicyConfig) DataGoogleComputeResourcePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig">DataGoogleComputeResourcePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig">DataGoogleComputeResourcePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.groupPlacementPolicy">GroupPlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList">DataGoogleComputeResourcePolicyGroupPlacementPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.instanceSchedulePolicy">InstanceSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.snapshotSchedulePolicy">SnapshotSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GroupPlacementPolicy`<sup>Required</sup> <a name="GroupPlacementPolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.groupPlacementPolicy"></a>

```go
func GroupPlacementPolicy() DataGoogleComputeResourcePolicyGroupPlacementPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList">DataGoogleComputeResourcePolicyGroupPlacementPolicyList</a>

---

##### `InstanceSchedulePolicy`<sup>Required</sup> <a name="InstanceSchedulePolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.instanceSchedulePolicy"></a>

```go
func InstanceSchedulePolicy() DataGoogleComputeResourcePolicyInstanceSchedulePolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SnapshotSchedulePolicy`<sup>Required</sup> <a name="SnapshotSchedulePolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.snapshotSchedulePolicy"></a>

```go
func SnapshotSchedulePolicy() DataGoogleComputeResourcePolicySnapshotSchedulePolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeResourcePolicyConfig <a name="DataGoogleComputeResourcePolicyConfig" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_resource_policy#id DataGoogleComputeResourcePolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_resource_policy#project DataGoogleComputeResourcePolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.region">Region</a></code> | <code>*string</code> | Region where resource policy resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the resource, provided by the client when initially creating the resource.

The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)'? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_resource_policy#name DataGoogleComputeResourcePolicy#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_resource_policy#id DataGoogleComputeResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_resource_policy#project DataGoogleComputeResourcePolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where resource policy resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/compute_resource_policy#region DataGoogleComputeResourcePolicy#region}

---

### DataGoogleComputeResourcePolicyGroupPlacementPolicy <a name="DataGoogleComputeResourcePolicyGroupPlacementPolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy {

}
```


### DataGoogleComputeResourcePolicyInstanceSchedulePolicy <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy {

}
```


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule {

}
```


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule {

}
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicy <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy {

}
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy {

}
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule {

}
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule {

}
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule {

}
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {

}
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks {

}
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

&datagooglecomputeresourcepolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeResourcePolicyGroupPlacementPolicyList <a name="DataGoogleComputeResourcePolicyGroupPlacementPolicyList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicyGroupPlacementPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicyGroupPlacementPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference <a name="DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount">AvailabilityDomainCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation">Collocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount">VmCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy">DataGoogleComputeResourcePolicyGroupPlacementPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomainCount`<sup>Required</sup> <a name="AvailabilityDomainCount" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount"></a>

```go
func AvailabilityDomainCount() *f64
```

- *Type:* *f64

---

##### `Collocation`<sup>Required</sup> <a name="Collocation" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation"></a>

```go
func Collocation() *string
```

- *Type:* *string

---

##### `VmCount`<sup>Required</sup> <a name="VmCount" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount"></a>

```go
func VmCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicyGroupPlacementPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy">DataGoogleComputeResourcePolicyGroupPlacementPolicy</a>

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyList <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicyInstanceSchedulePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicyInstanceSchedulePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule">VmStartSchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule">VmStopSchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy">DataGoogleComputeResourcePolicyInstanceSchedulePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `VmStartSchedule`<sup>Required</sup> <a name="VmStartSchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule"></a>

```go
func VmStartSchedule() DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList</a>

---

##### `VmStopSchedule`<sup>Required</sup> <a name="VmStopSchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule"></a>

```go
func VmStopSchedule() DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicyInstanceSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy">DataGoogleComputeResourcePolicyInstanceSchedulePolicy</a>

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties">SnapshotProperties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy"></a>

```go
func RetentionPolicy() DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule"></a>

```go
func Schedule() DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList</a>

---

##### `SnapshotProperties`<sup>Required</sup> <a name="SnapshotProperties" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties"></a>

```go
func SnapshotProperties() DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicySnapshotSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicy</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete">OnSourceDiskDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays"></a>

```go
func MaxRetentionDays() *f64
```

- *Type:* *f64

---

##### `OnSourceDiskDelete`<sup>Required</sup> <a name="OnSourceDiskDelete" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete"></a>

```go
func OnSourceDiskDelete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle">DaysInCycle</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInCycle`<sup>Required</sup> <a name="DaysInCycle" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle"></a>

```go
func DaysInCycle() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle">HoursInCycle</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInCycle`<sup>Required</sup> <a name="HoursInCycle" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle"></a>

```go
func HoursInCycle() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule"></a>

```go
func DailySchedule() DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList</a>

---

##### `HourlySchedule`<sup>Required</sup> <a name="HourlySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule"></a>

```go
func HourlySchedule() DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule"></a>

```go
func WeeklySchedule() DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks">DayOfWeeks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeeks`<sup>Required</sup> <a name="DayOfWeeks" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks"></a>

```go
func DayOfWeeks() DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.get"></a>

```go
func Get(index *f64) DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglecomputeresourcepolicy"

datagooglecomputeresourcepolicy.NewDataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName">ChainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush">GuestFlush</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations">StorageLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChainName`<sup>Required</sup> <a name="ChainName" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName"></a>

```go
func ChainName() *string
```

- *Type:* *string

---

##### `GuestFlush`<sup>Required</sup> <a name="GuestFlush" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush"></a>

```go
func GuestFlush() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `StorageLocations`<sup>Required</sup> <a name="StorageLocations" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations"></a>

```go
func StorageLocations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---



