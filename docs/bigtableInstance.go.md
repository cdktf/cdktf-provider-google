# `bigtableInstance` Submodule <a name="`bigtableInstance` Submodule" id="@cdktf/provider-google.bigtableInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableInstance <a name="BigtableInstance" id="@cdktf/provider-google.bigtableInstance.BigtableInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance google_bigtable_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigtableinstance"

bigtableinstance.NewBigtableInstance(scope Construct, id *string, config BigtableInstanceConfig) BigtableInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig">BigtableInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig">BigtableInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.putCluster">PutCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCluster` <a name="PutCluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.putCluster"></a>

```go
func PutCluster(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.putCluster.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetCluster"></a>

```go
func ResetCluster()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigtableinstance"

bigtableinstance.BigtableInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigtableinstance"

bigtableinstance.BigtableInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigtableinstance"

bigtableinstance.BigtableInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.cluster">Cluster</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList">BigtableInstanceClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.clusterInput">ClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.cluster"></a>

```go
func Cluster() BigtableInstanceClusterList
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList">BigtableInstanceClusterList</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.clusterInput"></a>

```go
func ClusterInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigtableInstance.BigtableInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableInstanceCluster <a name="BigtableInstanceCluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigtableinstance"

&bigtableinstance.BigtableInstanceCluster {
	ClusterId: *string,
	AutoscalingConfig: github.com/cdktf/cdktf-provider-google-go/google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig,
	KmsKeyName: *string,
	NumNodes: *f64,
	StorageType: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | The ID of the Cloud Bigtable cluster. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.numNodes">NumNodes</a></code> | <code>*f64</code> | The number of nodes in your Cloud Bigtable cluster. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.storageType">StorageType</a></code> | <code>*string</code> | The storage type to use. One of "SSD" or "HDD". Defaults to "SSD". |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.zone">Zone</a></code> | <code>*string</code> | The zone to create the Cloud Bigtable cluster in. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The ID of the Cloud Bigtable cluster.

Must be 6-30 characters and must only contain hyphens, lowercase letters and numbers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#cluster_id BigtableInstance#cluster_id}

---

##### `AutoscalingConfig`<sup>Optional</sup> <a name="AutoscalingConfig" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.autoscalingConfig"></a>

```go
AutoscalingConfig BigtableInstanceClusterAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#autoscaling_config BigtableInstance#autoscaling_config}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster.

The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the cloudkms.cryptoKeyEncrypterDecrypter role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster. 3) All clusters within an instance must use the same CMEK key. Values are of the form projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#kms_key_name BigtableInstance#kms_key_name}

---

##### `NumNodes`<sup>Optional</sup> <a name="NumNodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.numNodes"></a>

```go
NumNodes *f64
```

- *Type:* *f64

The number of nodes in your Cloud Bigtable cluster.

Required, with a minimum of 1 for each cluster in an instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#num_nodes BigtableInstance#num_nodes}

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

The storage type to use. One of "SSD" or "HDD". Defaults to "SSD".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#storage_type BigtableInstance#storage_type}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceCluster.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone to create the Cloud Bigtable cluster in.

Each cluster must have a different zone in the same region. Zones that support Bigtable instances are noted on the Cloud Bigtable locations page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#zone BigtableInstance#zone}

---

### BigtableInstanceClusterAutoscalingConfig <a name="BigtableInstanceClusterAutoscalingConfig" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigtableinstance"

&bigtableinstance.BigtableInstanceClusterAutoscalingConfig {
	CpuTarget: *f64,
	MaxNodes: *f64,
	MinNodes: *f64,
	StorageTarget: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.cpuTarget">CpuTarget</a></code> | <code>*f64</code> | The target CPU utilization for autoscaling. Value must be between 10 and 80. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | The maximum number of nodes for autoscaling. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.minNodes">MinNodes</a></code> | <code>*f64</code> | The minimum number of nodes for autoscaling. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.storageTarget">StorageTarget</a></code> | <code>*f64</code> | The target storage utilization for autoscaling, in GB, for each node in a cluster. |

---

##### `CpuTarget`<sup>Required</sup> <a name="CpuTarget" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.cpuTarget"></a>

```go
CpuTarget *f64
```

- *Type:* *f64

The target CPU utilization for autoscaling. Value must be between 10 and 80.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#cpu_target BigtableInstance#cpu_target}

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.maxNodes"></a>

```go
MaxNodes *f64
```

- *Type:* *f64

The maximum number of nodes for autoscaling.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#max_nodes BigtableInstance#max_nodes}

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.minNodes"></a>

```go
MinNodes *f64
```

- *Type:* *f64

The minimum number of nodes for autoscaling.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#min_nodes BigtableInstance#min_nodes}

---

##### `StorageTarget`<sup>Optional</sup> <a name="StorageTarget" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig.property.storageTarget"></a>

```go
StorageTarget *f64
```

- *Type:* *f64

The target storage utilization for autoscaling, in GB, for each node in a cluster.

This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16 TiB) for an HDD cluster. If not set, whatever is already set for the cluster will not change, or if the cluster is just being created, it will use the default value of 2560 for SSD clusters and 8192 for HDD clusters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#storage_target BigtableInstance#storage_target}

---

### BigtableInstanceConfig <a name="BigtableInstanceConfig" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigtableinstance"

&bigtableinstance.BigtableInstanceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Cluster: interface{},
	DeletionProtection: interface{},
	DisplayName: *string,
	Id: *string,
	InstanceType: *string,
	Labels: *map[string]*string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.cluster">Cluster</a></code> | <code>interface{}</code> | cluster block. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable display name of the Bigtable instance. Defaults to the instance name. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#id BigtableInstance#id}. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION". |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A mapping of labels to assign to the resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance.

Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#name BigtableInstance#name}

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.cluster"></a>

```go
Cluster interface{}
```

- *Type:* interface{}

cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#cluster BigtableInstance#cluster}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#deletion_protection BigtableInstance#deletion_protection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable display name of the Bigtable instance. Defaults to the instance name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#display_name BigtableInstance#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#id BigtableInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#instance_type BigtableInstance#instance_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A mapping of labels to assign to the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#labels BigtableInstance#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#project BigtableInstance#project}

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableInstanceClusterAutoscalingConfigOutputReference <a name="BigtableInstanceClusterAutoscalingConfigOutputReference" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigtableinstance"

bigtableinstance.NewBigtableInstanceClusterAutoscalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableInstanceClusterAutoscalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resetStorageTarget">ResetStorageTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageTarget` <a name="ResetStorageTarget" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.resetStorageTarget"></a>

```go
func ResetStorageTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTargetInput">CpuTargetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodesInput">MaxNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodesInput">MinNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTargetInput">StorageTargetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTarget">CpuTarget</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTarget">StorageTarget</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuTargetInput`<sup>Optional</sup> <a name="CpuTargetInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTargetInput"></a>

```go
func CpuTargetInput() *f64
```

- *Type:* *f64

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodesInput"></a>

```go
func MaxNodesInput() *f64
```

- *Type:* *f64

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodesInput"></a>

```go
func MinNodesInput() *f64
```

- *Type:* *f64

---

##### `StorageTargetInput`<sup>Optional</sup> <a name="StorageTargetInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTargetInput"></a>

```go
func StorageTargetInput() *f64
```

- *Type:* *f64

---

##### `CpuTarget`<sup>Required</sup> <a name="CpuTarget" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.cpuTarget"></a>

```go
func CpuTarget() *f64
```

- *Type:* *f64

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `StorageTarget`<sup>Required</sup> <a name="StorageTarget" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.storageTarget"></a>

```go
func StorageTarget() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BigtableInstanceClusterAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

---


### BigtableInstanceClusterList <a name="BigtableInstanceClusterList" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigtableinstance"

bigtableinstance.NewBigtableInstanceClusterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigtableInstanceClusterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.get"></a>

```go
func Get(index *f64) BigtableInstanceClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigtableInstanceClusterOutputReference <a name="BigtableInstanceClusterOutputReference" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigtableinstance"

bigtableinstance.NewBigtableInstanceClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigtableInstanceClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig">PutAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetAutoscalingConfig">ResetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetNumNodes">ResetNumNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingConfig` <a name="PutAutoscalingConfig" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig"></a>

```go
func PutAutoscalingConfig(value BigtableInstanceClusterAutoscalingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

---

##### `ResetAutoscalingConfig` <a name="ResetAutoscalingConfig" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetAutoscalingConfig"></a>

```go
func ResetAutoscalingConfig()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetNumNodes` <a name="ResetNumNodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetNumNodes"></a>

```go
func ResetNumNodes()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfig">AutoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference">BigtableInstanceClusterAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfigInput">AutoscalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodesInput">NumNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodes">NumNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingConfig`<sup>Required</sup> <a name="AutoscalingConfig" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfig"></a>

```go
func AutoscalingConfig() BigtableInstanceClusterAutoscalingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfigOutputReference">BigtableInstanceClusterAutoscalingConfigOutputReference</a>

---

##### `AutoscalingConfigInput`<sup>Optional</sup> <a name="AutoscalingConfigInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.autoscalingConfigInput"></a>

```go
func AutoscalingConfigInput() BigtableInstanceClusterAutoscalingConfig
```

- *Type:* <a href="#@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterAutoscalingConfig">BigtableInstanceClusterAutoscalingConfig</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `NumNodesInput`<sup>Optional</sup> <a name="NumNodesInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodesInput"></a>

```go
func NumNodesInput() *f64
```

- *Type:* *f64

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `NumNodes`<sup>Required</sup> <a name="NumNodes" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.numNodes"></a>

```go
func NumNodes() *f64
```

- *Type:* *f64

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableInstance.BigtableInstanceClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



