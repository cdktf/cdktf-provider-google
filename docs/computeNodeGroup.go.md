# `computeNodeGroup` Submodule <a name="`computeNodeGroup` Submodule" id="@cdktf/provider-google.computeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNodeGroup <a name="ComputeNodeGroup" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_node_group google_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

computenodegroup.NewComputeNodeGroup(scope Construct, id *string, config ComputeNodeGroupConfig) ComputeNodeGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig">ComputeNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig">ComputeNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy">PutAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings">PutShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetAutoscalingPolicy">ResetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetInitialSize">ResetInitialSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetShareSettings">ResetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoscalingPolicy` <a name="PutAutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy"></a>

```go
func PutAutoscalingPolicy(value ComputeNodeGroupAutoscalingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value ComputeNodeGroupMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---

##### `PutShareSettings` <a name="PutShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings"></a>

```go
func PutShareSettings(value ComputeNodeGroupShareSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts"></a>

```go
func PutTimeouts(value ComputeNodeGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>

---

##### `ResetAutoscalingPolicy` <a name="ResetAutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetAutoscalingPolicy"></a>

```go
func ResetAutoscalingPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialSize` <a name="ResetInitialSize" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetInitialSize"></a>

```go
func ResetInitialSize()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenancePolicy"></a>

```go
func ResetMaintenancePolicy()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetProject"></a>

```go
func ResetProject()
```

##### `ResetShareSettings` <a name="ResetShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetShareSettings"></a>

```go
func ResetShareSettings()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetSize"></a>

```go
func ResetSize()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

computenodegroup.ComputeNodeGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

computenodegroup.ComputeNodeGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

computenodegroup.ComputeNodeGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference">ComputeNodeGroupAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference">ComputeNodeGroupMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference">ComputeNodeGroupShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference">ComputeNodeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicyInput">AutoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSizeInput">InitialSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplateInput">NodeTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettingsInput">ShareSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSize">InitialSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicy">MaintenancePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplate">NodeTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicy"></a>

```go
func AutoscalingPolicy() ComputeNodeGroupAutoscalingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference">ComputeNodeGroupAutoscalingPolicyOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() ComputeNodeGroupMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference">ComputeNodeGroupMaintenanceWindowOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettings"></a>

```go
func ShareSettings() ComputeNodeGroupShareSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference">ComputeNodeGroupShareSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeouts"></a>

```go
func Timeouts() ComputeNodeGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference">ComputeNodeGroupTimeoutsOutputReference</a>

---

##### `AutoscalingPolicyInput`<sup>Optional</sup> <a name="AutoscalingPolicyInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicyInput"></a>

```go
func AutoscalingPolicyInput() ComputeNodeGroupAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialSizeInput`<sup>Optional</sup> <a name="InitialSizeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSizeInput"></a>

```go
func InitialSizeInput() *f64
```

- *Type:* *f64

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicyInput"></a>

```go
func MaintenancePolicyInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() ComputeNodeGroupMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeTemplateInput`<sup>Optional</sup> <a name="NodeTemplateInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplateInput"></a>

```go
func NodeTemplateInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ShareSettingsInput`<sup>Optional</sup> <a name="ShareSettingsInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettingsInput"></a>

```go
func ShareSettingsInput() ComputeNodeGroupShareSettings
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialSize`<sup>Required</sup> <a name="InitialSize" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSize"></a>

```go
func InitialSize() *f64
```

- *Type:* *f64

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeTemplate`<sup>Required</sup> <a name="NodeTemplate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplate"></a>

```go
func NodeTemplate() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNodeGroupAutoscalingPolicy <a name="ComputeNodeGroupAutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

&computenodegroup.ComputeNodeGroupAutoscalingPolicy {
	MaxNodes: *f64,
	MinNodes: *f64,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | Maximum size of the node group. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.minNodes">MinNodes</a></code> | <code>*f64</code> | Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.mode">Mode</a></code> | <code>*string</code> | The autoscaling mode. |

---

##### `MaxNodes`<sup>Optional</sup> <a name="MaxNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.maxNodes"></a>

```go
MaxNodes *f64
```

- *Type:* *f64

Maximum size of the node group.

Set to a value less than or equal
to 100 and greater than or equal to min-nodes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#max_nodes ComputeNodeGroup#max_nodes}

---

##### `MinNodes`<sup>Optional</sup> <a name="MinNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.minNodes"></a>

```go
MinNodes *f64
```

- *Type:* *f64

Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#min_nodes ComputeNodeGroup#min_nodes}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The autoscaling mode.

Set to one of the following:

* OFF: Disables the autoscaler.
* ON: Enables scaling in and scaling out.
* ONLY_SCALE_OUT: Enables only scaling out.
  You must use this mode if your node groups are configured to
  restart their hosted VMs on minimal servers. Possible values: ["OFF", "ON", "ONLY_SCALE_OUT"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#mode ComputeNodeGroup#mode}

---

### ComputeNodeGroupConfig <a name="ComputeNodeGroupConfig" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

&computenodegroup.ComputeNodeGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NodeTemplate: *string,
	AutoscalingPolicy: github.com/cdktf/cdktf-provider-google-go/google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy,
	Description: *string,
	Id: *string,
	InitialSize: *f64,
	MaintenancePolicy: *string,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-google-go/google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow,
	Name: *string,
	Project: *string,
	ShareSettings: github.com/cdktf/cdktf-provider-google-go/google.computeNodeGroup.ComputeNodeGroupShareSettings,
	Size: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeNodeGroup.ComputeNodeGroupTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.nodeTemplate">NodeTemplate</a></code> | <code>*string</code> | The URL of the node template to which this node group belongs. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.description">Description</a></code> | <code>*string</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#id ComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.initialSize">InitialSize</a></code> | <code>*f64</code> | The initial number of nodes in the node group. One of 'initial_size' or 'size' must be specified. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code>*string</code> | Specifies how to handle instances when a node in the group undergoes maintenance. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#project ComputeNodeGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.size">Size</a></code> | <code>*f64</code> | The total number of nodes in the node group. One of 'initial_size' or 'size' must be specified. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.zone">Zone</a></code> | <code>*string</code> | Zone where this node group is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NodeTemplate`<sup>Required</sup> <a name="NodeTemplate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.nodeTemplate"></a>

```go
NodeTemplate *string
```

- *Type:* *string

The URL of the node template to which this node group belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#node_template ComputeNodeGroup#node_template}

---

##### `AutoscalingPolicy`<sup>Optional</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.autoscalingPolicy"></a>

```go
AutoscalingPolicy ComputeNodeGroupAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#autoscaling_policy ComputeNodeGroup#autoscaling_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#description ComputeNodeGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#id ComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialSize`<sup>Optional</sup> <a name="InitialSize" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.initialSize"></a>

```go
InitialSize *f64
```

- *Type:* *f64

The initial number of nodes in the node group. One of 'initial_size' or 'size' must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#initial_size ComputeNodeGroup#initial_size}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenancePolicy"></a>

```go
MaintenancePolicy *string
```

- *Type:* *string

Specifies how to handle instances when a node in the group undergoes maintenance.

Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#maintenance_policy ComputeNodeGroup#maintenance_policy}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow ComputeNodeGroupMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#maintenance_window ComputeNodeGroup#maintenance_window}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#name ComputeNodeGroup#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#project ComputeNodeGroup#project}.

---

##### `ShareSettings`<sup>Optional</sup> <a name="ShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.shareSettings"></a>

```go
ShareSettings ComputeNodeGroupShareSettings
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#share_settings ComputeNodeGroup#share_settings}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

The total number of nodes in the node group. One of 'initial_size' or 'size' must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#size ComputeNodeGroup#size}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.timeouts"></a>

```go
Timeouts ComputeNodeGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#timeouts ComputeNodeGroup#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Zone where this node group is located.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#zone ComputeNodeGroup#zone}

---

### ComputeNodeGroupMaintenanceWindow <a name="ComputeNodeGroupMaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

&computenodegroup.ComputeNodeGroupMaintenanceWindow {
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.property.startTime">StartTime</a></code> | <code>*string</code> | instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#start_time ComputeNodeGroup#start_time}

---

### ComputeNodeGroupShareSettings <a name="ComputeNodeGroupShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

&computenodegroup.ComputeNodeGroupShareSettings {
	ShareType: *string,
	ProjectMap: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.shareType">ShareType</a></code> | <code>*string</code> | Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"]. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.projectMap">ProjectMap</a></code> | <code>interface{}</code> | project_map block. |

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.shareType"></a>

```go
ShareType *string
```

- *Type:* *string

Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#share_type ComputeNodeGroup#share_type}

---

##### `ProjectMap`<sup>Optional</sup> <a name="ProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.projectMap"></a>

```go
ProjectMap interface{}
```

- *Type:* interface{}

project_map block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#project_map ComputeNodeGroup#project_map}

---

### ComputeNodeGroupShareSettingsProjectMap <a name="ComputeNodeGroupShareSettingsProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

&computenodegroup.ComputeNodeGroupShareSettingsProjectMap {
	Id: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#id ComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.projectId">ProjectId</a></code> | <code>*string</code> | The project id/number should be the same as the key of this project config in the project map. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#id ComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project id/number should be the same as the key of this project config in the project map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#project_id ComputeNodeGroup#project_id}

---

### ComputeNodeGroupTimeouts <a name="ComputeNodeGroupTimeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

&computenodegroup.ComputeNodeGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#create ComputeNodeGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#delete ComputeNodeGroup#delete}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#update ComputeNodeGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#create ComputeNodeGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#delete ComputeNodeGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_node_group#update ComputeNodeGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNodeGroupAutoscalingPolicyOutputReference <a name="ComputeNodeGroupAutoscalingPolicyOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

computenodegroup.NewComputeNodeGroupAutoscalingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNodeGroupAutoscalingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes">ResetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes">ResetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodes` <a name="ResetMaxNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes"></a>

```go
func ResetMaxNodes()
```

##### `ResetMinNodes` <a name="ResetMinNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes"></a>

```go
func ResetMinNodes()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput">MaxNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput">MinNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput"></a>

```go
func MaxNodesInput() *f64
```

- *Type:* *f64

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput"></a>

```go
func MinNodesInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNodeGroupAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---


### ComputeNodeGroupMaintenanceWindowOutputReference <a name="ComputeNodeGroupMaintenanceWindowOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

computenodegroup.NewComputeNodeGroupMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNodeGroupMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNodeGroupMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---


### ComputeNodeGroupShareSettingsOutputReference <a name="ComputeNodeGroupShareSettingsOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

computenodegroup.NewComputeNodeGroupShareSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNodeGroupShareSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap">PutProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resetProjectMap">ResetProjectMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProjectMap` <a name="PutProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap"></a>

```go
func PutProjectMap(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProjectMap` <a name="ResetProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resetProjectMap"></a>

```go
func ResetProjectMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList">ComputeNodeGroupShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMapInput">ProjectMapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput">ShareTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMap"></a>

```go
func ProjectMap() ComputeNodeGroupShareSettingsProjectMapList
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList">ComputeNodeGroupShareSettingsProjectMapList</a>

---

##### `ProjectMapInput`<sup>Optional</sup> <a name="ProjectMapInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMapInput"></a>

```go
func ProjectMapInput() interface{}
```

- *Type:* interface{}

---

##### `ShareTypeInput`<sup>Optional</sup> <a name="ShareTypeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput"></a>

```go
func ShareTypeInput() *string
```

- *Type:* *string

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareType"></a>

```go
func ShareType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeNodeGroupShareSettings
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---


### ComputeNodeGroupShareSettingsProjectMapList <a name="ComputeNodeGroupShareSettingsProjectMapList" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

computenodegroup.NewComputeNodeGroupShareSettingsProjectMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeNodeGroupShareSettingsProjectMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get"></a>

```go
func Get(index *f64) ComputeNodeGroupShareSettingsProjectMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeNodeGroupShareSettingsProjectMapOutputReference <a name="ComputeNodeGroupShareSettingsProjectMapOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

computenodegroup.NewComputeNodeGroupShareSettingsProjectMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeNodeGroupShareSettingsProjectMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeNodeGroupTimeoutsOutputReference <a name="ComputeNodeGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenodegroup"

computenodegroup.NewComputeNodeGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNodeGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



