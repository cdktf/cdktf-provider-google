# `computeAttachedDisk` Submodule <a name="`computeAttachedDisk` Submodule" id="@cdktf/provider-google.computeAttachedDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeAttachedDisk <a name="ComputeAttachedDisk" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk google_compute_attached_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeattacheddisk"

computeattacheddisk.NewComputeAttachedDisk(scope Construct, id *string, config ComputeAttachedDiskConfig) ComputeAttachedDisk
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig">ComputeAttachedDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig">ComputeAttachedDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.putTimeouts"></a>

```go
func PutTimeouts(value ComputeAttachedDiskTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts">ComputeAttachedDiskTimeouts</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetId"></a>

```go
func ResetId()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetMode"></a>

```go
func ResetMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeattacheddisk"

computeattacheddisk.ComputeAttachedDisk_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeattacheddisk"

computeattacheddisk.ComputeAttachedDisk_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeattacheddisk"

computeattacheddisk.ComputeAttachedDisk_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference">ComputeAttachedDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.diskInput">DiskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.disk">Disk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.timeouts"></a>

```go
func Timeouts() ComputeAttachedDiskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference">ComputeAttachedDiskTimeoutsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.diskInput"></a>

```go
func DiskInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.disk"></a>

```go
func Disk() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDisk.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeAttachedDiskConfig <a name="ComputeAttachedDiskConfig" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeattacheddisk"

&computeattacheddisk.ComputeAttachedDiskConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Disk: *string,
	Instance: *string,
	DeviceName: *string,
	Id: *string,
	Mode: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeAttachedDisk.ComputeAttachedDiskTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.disk">Disk</a></code> | <code>*string</code> | name or self_link of the disk that will be attached. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.instance">Instance</a></code> | <code>*string</code> | name or self_link of the compute instance that the disk will be attached to. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.deviceName">DeviceName</a></code> | <code>*string</code> | Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#id ComputeAttachedDisk#id}. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.mode">Mode</a></code> | <code>*string</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.project">Project</a></code> | <code>*string</code> | The project that the referenced compute instance is a part of. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts">ComputeAttachedDiskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone that the referenced compute instance is located within. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.disk"></a>

```go
Disk *string
```

- *Type:* *string

name or self_link of the disk that will be attached.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#disk ComputeAttachedDisk#disk}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

name or self_link of the compute instance that the disk will be attached to.

If the self_link is provided then zone and project are extracted from the self link. If only the name is used then zone and project must be defined as properties on the resource or provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#instance ComputeAttachedDisk#instance}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-* tree of a Linux operating system running within the instance.

This name can be used to reference the device for mounting, resizing, and so on, from within the instance. If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disks-x, where x is a number assigned by Google Compute Engine.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#device_name ComputeAttachedDisk#device_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#id ComputeAttachedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#mode ComputeAttachedDisk#mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project that the referenced compute instance is a part of.

If instance is referenced by its self_link the project defined in the link will take precedence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#project ComputeAttachedDisk#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.timeouts"></a>

```go
Timeouts ComputeAttachedDiskTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts">ComputeAttachedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#timeouts ComputeAttachedDisk#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone that the referenced compute instance is located within.

If instance is referenced by its self_link the zone defined in the link will take precedence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#zone ComputeAttachedDisk#zone}

---

### ComputeAttachedDiskTimeouts <a name="ComputeAttachedDiskTimeouts" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeattacheddisk"

&computeattacheddisk.ComputeAttachedDiskTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#create ComputeAttachedDisk#create}. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#delete ComputeAttachedDisk#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#create ComputeAttachedDisk#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_attached_disk#delete ComputeAttachedDisk#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeAttachedDiskTimeoutsOutputReference <a name="ComputeAttachedDiskTimeoutsOutputReference" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeattacheddisk"

computeattacheddisk.NewComputeAttachedDiskTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeAttachedDiskTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAttachedDisk.ComputeAttachedDiskTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



