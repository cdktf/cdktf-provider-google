# `storageTransferJob` Submodule <a name="`storageTransferJob` Submodule" id="@cdktf/provider-google.storageTransferJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageTransferJob <a name="StorageTransferJob" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job google_storage_transfer_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJob(scope Construct, id *string, config StorageTransferJobConfig) StorageTransferJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig">StorageTransferJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig">StorageTransferJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec">PutTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig"></a>

```go
func PutNotificationConfig(value StorageTransferJobNotificationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule"></a>

```go
func PutSchedule(value StorageTransferJobSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---

##### `PutTransferSpec` <a name="PutTransferSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec"></a>

```go
func PutTransferSpec(value StorageTransferJobTransferSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetId"></a>

```go
func ResetId()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetNotificationConfig"></a>

```go
func ResetNotificationConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.StorageTransferJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.StorageTransferJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.StorageTransferJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.deletionTime">DeletionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lastModificationTime">LastModificationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference">StorageTransferJobNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference">StorageTransferJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpec">TransferSpec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference">StorageTransferJobTransferSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpecInput">TransferSpecInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DeletionTime`<sup>Required</sup> <a name="DeletionTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.deletionTime"></a>

```go
func DeletionTime() *string
```

- *Type:* *string

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lastModificationTime"></a>

```go
func LastModificationTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfig"></a>

```go
func NotificationConfig() StorageTransferJobNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference">StorageTransferJobNotificationConfigOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.schedule"></a>

```go
func Schedule() StorageTransferJobScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference">StorageTransferJobScheduleOutputReference</a>

---

##### `TransferSpec`<sup>Required</sup> <a name="TransferSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpec"></a>

```go
func TransferSpec() StorageTransferJobTransferSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference">StorageTransferJobTransferSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfigInput"></a>

```go
func NotificationConfigInput() StorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.scheduleInput"></a>

```go
func ScheduleInput() StorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TransferSpecInput`<sup>Optional</sup> <a name="TransferSpecInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpecInput"></a>

```go
func TransferSpecInput() StorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageTransferJobConfig <a name="StorageTransferJobConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	TransferSpec: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpec,
	Id: *string,
	NotificationConfig: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobNotificationConfig,
	Project: *string,
	Schedule: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobSchedule,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.description">Description</a></code> | <code>*string</code> | Unique description to identify the Transfer Job. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.transferSpec">TransferSpec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | transfer_spec block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#id StorageTransferJob#id}. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.project">Project</a></code> | <code>*string</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.status">Status</a></code> | <code>*string</code> | Status of the job. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Unique description to identify the Transfer Job.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#description StorageTransferJob#description}

---

##### `TransferSpec`<sup>Required</sup> <a name="TransferSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.transferSpec"></a>

```go
TransferSpec StorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

transfer_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#transfer_spec StorageTransferJob#transfer_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#id StorageTransferJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.notificationConfig"></a>

```go
NotificationConfig StorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#notification_config StorageTransferJob#notification_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#project StorageTransferJob#project}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.schedule"></a>

```go
Schedule StorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#schedule StorageTransferJob#schedule}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Status of the job.

Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#status StorageTransferJob#status}

---

### StorageTransferJobNotificationConfig <a name="StorageTransferJobNotificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobNotificationConfig {
	PayloadFormat: *string,
	PubsubTopic: *string,
	EventTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.payloadFormat">PayloadFormat</a></code> | <code>*string</code> | The desired format of the notification message payloads. One of "NONE" or "JSON". |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | The Topic.name of the Pub/Sub topic to which to publish notifications. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.eventTypes">EventTypes</a></code> | <code>*[]*string</code> | Event types for which a notification is desired. |

---

##### `PayloadFormat`<sup>Required</sup> <a name="PayloadFormat" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.payloadFormat"></a>

```go
PayloadFormat *string
```

- *Type:* *string

The desired format of the notification message payloads. One of "NONE" or "JSON".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#payload_format StorageTransferJob#payload_format}

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.pubsubTopic"></a>

```go
PubsubTopic *string
```

- *Type:* *string

The Topic.name of the Pub/Sub topic to which to publish notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#pubsub_topic StorageTransferJob#pubsub_topic}

---

##### `EventTypes`<sup>Optional</sup> <a name="EventTypes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.eventTypes"></a>

```go
EventTypes *[]*string
```

- *Type:* *[]*string

Event types for which a notification is desired.

If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#event_types StorageTransferJob#event_types}

---

### StorageTransferJobSchedule <a name="StorageTransferJobSchedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobSchedule {
	ScheduleStartDate: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate,
	RepeatInterval: *string,
	ScheduleEndDate: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate,
	StartTimeOfDay: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleStartDate">ScheduleStartDate</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | schedule_start_date block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.repeatInterval">RepeatInterval</a></code> | <code>*string</code> | Interval between the start of each scheduled transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleEndDate">ScheduleEndDate</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | schedule_end_date block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.startTimeOfDay">StartTimeOfDay</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | start_time_of_day block. |

---

##### `ScheduleStartDate`<sup>Required</sup> <a name="ScheduleStartDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleStartDate"></a>

```go
ScheduleStartDate StorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

schedule_start_date block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#schedule_start_date StorageTransferJob#schedule_start_date}

---

##### `RepeatInterval`<sup>Optional</sup> <a name="RepeatInterval" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.repeatInterval"></a>

```go
RepeatInterval *string
```

- *Type:* *string

Interval between the start of each scheduled transfer.

If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#repeat_interval StorageTransferJob#repeat_interval}

---

##### `ScheduleEndDate`<sup>Optional</sup> <a name="ScheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleEndDate"></a>

```go
ScheduleEndDate StorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

schedule_end_date block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#schedule_end_date StorageTransferJob#schedule_end_date}

---

##### `StartTimeOfDay`<sup>Optional</sup> <a name="StartTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.startTimeOfDay"></a>

```go
StartTimeOfDay StorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

start_time_of_day block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#start_time_of_day StorageTransferJob#start_time_of_day}

---

### StorageTransferJobScheduleScheduleEndDate <a name="StorageTransferJobScheduleScheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobScheduleScheduleEndDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.day">Day</a></code> | <code>*f64</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.month">Month</a></code> | <code>*f64</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.year">Year</a></code> | <code>*f64</code> | Year of date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#day StorageTransferJob#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#month StorageTransferJob#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#year StorageTransferJob#year}

---

### StorageTransferJobScheduleScheduleStartDate <a name="StorageTransferJobScheduleScheduleStartDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobScheduleScheduleStartDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.day">Day</a></code> | <code>*f64</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.month">Month</a></code> | <code>*f64</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.year">Year</a></code> | <code>*f64</code> | Year of date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#day StorageTransferJob#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#month StorageTransferJob#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#year StorageTransferJob#year}

---

### StorageTransferJobScheduleStartTimeOfDay <a name="StorageTransferJobScheduleStartTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobScheduleStartTimeOfDay {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#hours StorageTransferJob#hours}

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#minutes StorageTransferJob#minutes}

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#nanos StorageTransferJob#nanos}

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#seconds StorageTransferJob#seconds}

---

### StorageTransferJobTransferSpec <a name="StorageTransferJobTransferSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpec {
	AwsS3DataSource: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource,
	AzureBlobStorageDataSource: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource,
	GcsDataSink: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink,
	GcsDataSource: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource,
	HttpDataSource: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource,
	ObjectConditions: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions,
	PosixDataSink: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink,
	PosixDataSource: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource,
	SinkAgentPoolName: *string,
	SourceAgentPoolName: *string,
	TransferOptions: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.awsS3DataSource">AwsS3DataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | aws_s3_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.azureBlobStorageDataSource">AzureBlobStorageDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | azure_blob_storage_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.httpDataSource">HttpDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | http_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSink">PosixDataSink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | posix_data_sink block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSource">PosixDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | posix_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sinkAgentPoolName">SinkAgentPoolName</a></code> | <code>*string</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sourceAgentPoolName">SourceAgentPoolName</a></code> | <code>*string</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | transfer_options block. |

---

##### `AwsS3DataSource`<sup>Optional</sup> <a name="AwsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.awsS3DataSource"></a>

```go
AwsS3DataSource StorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

aws_s3_data_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#aws_s3_data_source StorageTransferJob#aws_s3_data_source}

---

##### `AzureBlobStorageDataSource`<sup>Optional</sup> <a name="AzureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.azureBlobStorageDataSource"></a>

```go
AzureBlobStorageDataSource StorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

azure_blob_storage_data_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#azure_blob_storage_data_source StorageTransferJob#azure_blob_storage_data_source}

---

##### `GcsDataSink`<sup>Optional</sup> <a name="GcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSink"></a>

```go
GcsDataSink StorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}

---

##### `GcsDataSource`<sup>Optional</sup> <a name="GcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSource"></a>

```go
GcsDataSource StorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}

---

##### `HttpDataSource`<sup>Optional</sup> <a name="HttpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.httpDataSource"></a>

```go
HttpDataSource StorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

http_data_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#http_data_source StorageTransferJob#http_data_source}

---

##### `ObjectConditions`<sup>Optional</sup> <a name="ObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.objectConditions"></a>

```go
ObjectConditions StorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}

---

##### `PosixDataSink`<sup>Optional</sup> <a name="PosixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSink"></a>

```go
PosixDataSink StorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

posix_data_sink block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#posix_data_sink StorageTransferJob#posix_data_sink}

---

##### `PosixDataSource`<sup>Optional</sup> <a name="PosixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSource"></a>

```go
PosixDataSource StorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

posix_data_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#posix_data_source StorageTransferJob#posix_data_source}

---

##### `SinkAgentPoolName`<sup>Optional</sup> <a name="SinkAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sinkAgentPoolName"></a>

```go
SinkAgentPoolName *string
```

- *Type:* *string

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#sink_agent_pool_name StorageTransferJob#sink_agent_pool_name}

---

##### `SourceAgentPoolName`<sup>Optional</sup> <a name="SourceAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sourceAgentPoolName"></a>

```go
SourceAgentPoolName *string
```

- *Type:* *string

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#source_agent_pool_name StorageTransferJob#source_agent_pool_name}

---

##### `TransferOptions`<sup>Optional</sup> <a name="TransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.transferOptions"></a>

```go
TransferOptions StorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}

---

### StorageTransferJobTransferSpecAwsS3DataSource <a name="StorageTransferJobTransferSpecAwsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecAwsS3DataSource {
	BucketName: *string,
	AwsAccessKey: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.bucketName">BucketName</a></code> | <code>*string</code> | S3 Bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | aws_access_key block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

S3 Bucket name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `AwsAccessKey`<sup>Optional</sup> <a name="AwsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey"></a>

```go
AwsAccessKey StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

aws_access_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#aws_access_key StorageTransferJob#aws_access_key}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'.

For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#role_arn StorageTransferJob#role_arn}

---

### StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey <a name="StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey {
	AccessKeyId: *string,
	SecretAccessKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | AWS Key ID. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | AWS Secret Access Key. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

AWS Key ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#access_key_id StorageTransferJob#access_key_id}

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

AWS Secret Access Key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#secret_access_key StorageTransferJob#secret_access_key}

---

### StorageTransferJobTransferSpecAzureBlobStorageDataSource <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecAzureBlobStorageDataSource {
	AzureCredentials: github.com/cdktf/cdktf-provider-google-go/google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials,
	Container: *string,
	StorageAccount: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials">AzureCredentials</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | azure_credentials block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container">Container</a></code> | <code>*string</code> | The container to transfer from the Azure Storage account. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount">StorageAccount</a></code> | <code>*string</code> | The name of the Azure Storage account. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path">Path</a></code> | <code>*string</code> | Root path to transfer objects. |

---

##### `AzureCredentials`<sup>Required</sup> <a name="AzureCredentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials"></a>

```go
AzureCredentials StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

azure_credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#azure_credentials StorageTransferJob#azure_credentials}

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container"></a>

```go
Container *string
```

- *Type:* *string

The container to transfer from the Azure Storage account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#container StorageTransferJob#container}

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount"></a>

```go
StorageAccount *string
```

- *Type:* *string

The name of the Azure Storage account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#storage_account StorageTransferJob#storage_account}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

Root path to transfer objects.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials {
	SasToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken">SasToken</a></code> | <code>*string</code> | Azure shared access signature. |

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken"></a>

```go
SasToken *string
```

- *Type:* *string

Azure shared access signature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#sas_token StorageTransferJob#sas_token}

---

### StorageTransferJobTransferSpecGcsDataSink <a name="StorageTransferJobTransferSpecGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecGcsDataSink {
	BucketName: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.bucketName">BucketName</a></code> | <code>*string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.path">Path</a></code> | <code>*string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.path"></a>

```go
Path *string
```

- *Type:* *string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecGcsDataSource <a name="StorageTransferJobTransferSpecGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecGcsDataSource {
	BucketName: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.bucketName">BucketName</a></code> | <code>*string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.path">Path</a></code> | <code>*string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.path"></a>

```go
Path *string
```

- *Type:* *string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecHttpDataSource <a name="StorageTransferJobTransferSpecHttpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecHttpDataSource {
	ListUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.property.listUrl">ListUrl</a></code> | <code>*string</code> | The URL that points to the file that stores the object list entries. |

---

##### `ListUrl`<sup>Required</sup> <a name="ListUrl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.property.listUrl"></a>

```go
ListUrl *string
```

- *Type:* *string

The URL that points to the file that stores the object list entries.

This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#list_url StorageTransferJob#list_url}

---

### StorageTransferJobTransferSpecObjectConditions <a name="StorageTransferJobTransferSpecObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecObjectConditions {
	ExcludePrefixes: *[]*string,
	IncludePrefixes: *[]*string,
	LastModifiedBefore: *string,
	LastModifiedSince: *string,
	MaxTimeElapsedSinceLastModification: *string,
	MinTimeElapsedSinceLastModification: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.excludePrefixes">ExcludePrefixes</a></code> | <code>*[]*string</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.includePrefixes">IncludePrefixes</a></code> | <code>*[]*string</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>*string</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince">LastModifiedSince</a></code> | <code>*string</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>*string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>*string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `ExcludePrefixes`<sup>Optional</sup> <a name="ExcludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.excludePrefixes"></a>

```go
ExcludePrefixes *[]*string
```

- *Type:* *[]*string

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}

---

##### `IncludePrefixes`<sup>Optional</sup> <a name="IncludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.includePrefixes"></a>

```go
IncludePrefixes *[]*string
```

- *Type:* *[]*string

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}

---

##### `LastModifiedBefore`<sup>Optional</sup> <a name="LastModifiedBefore" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore"></a>

```go
LastModifiedBefore *string
```

- *Type:* *string

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}

---

##### `LastModifiedSince`<sup>Optional</sup> <a name="LastModifiedSince" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince"></a>

```go
LastModifiedSince *string
```

- *Type:* *string

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}

---

##### `MaxTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```go
MaxTimeElapsedSinceLastModification *string
```

- *Type:* *string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `MinTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```go
MinTimeElapsedSinceLastModification *string
```

- *Type:* *string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}

---

### StorageTransferJobTransferSpecPosixDataSink <a name="StorageTransferJobTransferSpecPosixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecPosixDataSink {
	RootDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | Root directory path to the filesystem. |

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.property.rootDirectory"></a>

```go
RootDirectory *string
```

- *Type:* *string

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#root_directory StorageTransferJob#root_directory}

---

### StorageTransferJobTransferSpecPosixDataSource <a name="StorageTransferJobTransferSpecPosixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecPosixDataSource {
	RootDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | Root directory path to the filesystem. |

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.property.rootDirectory"></a>

```go
RootDirectory *string
```

- *Type:* *string

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#root_directory StorageTransferJob#root_directory}

---

### StorageTransferJobTransferSpecTransferOptions <a name="StorageTransferJobTransferSpecTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

&storagetransferjob.StorageTransferJobTransferSpecTransferOptions {
	DeleteObjectsFromSourceAfterTransfer: interface{},
	DeleteObjectsUniqueInSink: interface{},
	OverwriteObjectsAlreadyExistingInSink: interface{},
	OverwriteWhen: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>interface{}</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>interface{}</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>interface{}</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteWhen">OverwriteWhen</a></code> | <code>*string</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```go
DeleteObjectsFromSourceAfterTransfer interface{}
```

- *Type:* interface{}

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `DeleteObjectsUniqueInSink`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```go
DeleteObjectsUniqueInSink interface{}
```

- *Type:* interface{}

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```go
OverwriteObjectsAlreadyExistingInSink interface{}
```

- *Type:* interface{}

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `OverwriteWhen`<sup>Optional</sup> <a name="OverwriteWhen" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteWhen"></a>

```go
OverwriteWhen *string
```

- *Type:* *string

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageTransferJobNotificationConfigOutputReference <a name="StorageTransferJobNotificationConfigOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobNotificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobNotificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resetEventTypes">ResetEventTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventTypes` <a name="ResetEventTypes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resetEventTypes"></a>

```go
func ResetEventTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypesInput">EventTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput">PayloadFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypes">EventTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormat">PayloadFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTypesInput`<sup>Optional</sup> <a name="EventTypesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypesInput"></a>

```go
func EventTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PayloadFormatInput`<sup>Optional</sup> <a name="PayloadFormatInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput"></a>

```go
func PayloadFormatInput() *string
```

- *Type:* *string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```go
func PubsubTopicInput() *string
```

- *Type:* *string

---

##### `EventTypes`<sup>Required</sup> <a name="EventTypes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypes"></a>

```go
func EventTypes() *[]*string
```

- *Type:* *[]*string

---

##### `PayloadFormat`<sup>Required</sup> <a name="PayloadFormat" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormat"></a>

```go
func PayloadFormat() *string
```

- *Type:* *string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---


### StorageTransferJobScheduleOutputReference <a name="StorageTransferJobScheduleOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate">PutScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate">PutScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay">PutStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetRepeatInterval">ResetRepeatInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetScheduleEndDate">ResetScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetStartTimeOfDay">ResetStartTimeOfDay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduleEndDate` <a name="PutScheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate"></a>

```go
func PutScheduleEndDate(value StorageTransferJobScheduleScheduleEndDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---

##### `PutScheduleStartDate` <a name="PutScheduleStartDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate"></a>

```go
func PutScheduleStartDate(value StorageTransferJobScheduleScheduleStartDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---

##### `PutStartTimeOfDay` <a name="PutStartTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay"></a>

```go
func PutStartTimeOfDay(value StorageTransferJobScheduleStartTimeOfDay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---

##### `ResetRepeatInterval` <a name="ResetRepeatInterval" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetRepeatInterval"></a>

```go
func ResetRepeatInterval()
```

##### `ResetScheduleEndDate` <a name="ResetScheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetScheduleEndDate"></a>

```go
func ResetScheduleEndDate()
```

##### `ResetStartTimeOfDay` <a name="ResetStartTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetStartTimeOfDay"></a>

```go
func ResetStartTimeOfDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDate">ScheduleEndDate</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference">StorageTransferJobScheduleScheduleEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDate">ScheduleStartDate</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference">StorageTransferJobScheduleScheduleStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDay">StartTimeOfDay</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference">StorageTransferJobScheduleStartTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatIntervalInput">RepeatIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDateInput">ScheduleEndDateInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDateInput">ScheduleStartDateInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDayInput">StartTimeOfDayInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatInterval">RepeatInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleEndDate`<sup>Required</sup> <a name="ScheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDate"></a>

```go
func ScheduleEndDate() StorageTransferJobScheduleScheduleEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference">StorageTransferJobScheduleScheduleEndDateOutputReference</a>

---

##### `ScheduleStartDate`<sup>Required</sup> <a name="ScheduleStartDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDate"></a>

```go
func ScheduleStartDate() StorageTransferJobScheduleScheduleStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference">StorageTransferJobScheduleScheduleStartDateOutputReference</a>

---

##### `StartTimeOfDay`<sup>Required</sup> <a name="StartTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDay"></a>

```go
func StartTimeOfDay() StorageTransferJobScheduleStartTimeOfDayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference">StorageTransferJobScheduleStartTimeOfDayOutputReference</a>

---

##### `RepeatIntervalInput`<sup>Optional</sup> <a name="RepeatIntervalInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatIntervalInput"></a>

```go
func RepeatIntervalInput() *string
```

- *Type:* *string

---

##### `ScheduleEndDateInput`<sup>Optional</sup> <a name="ScheduleEndDateInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDateInput"></a>

```go
func ScheduleEndDateInput() StorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---

##### `ScheduleStartDateInput`<sup>Optional</sup> <a name="ScheduleStartDateInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDateInput"></a>

```go
func ScheduleStartDateInput() StorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---

##### `StartTimeOfDayInput`<sup>Optional</sup> <a name="StartTimeOfDayInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDayInput"></a>

```go
func StartTimeOfDayInput() StorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---

##### `RepeatInterval`<sup>Required</sup> <a name="RepeatInterval" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatInterval"></a>

```go
func RepeatInterval() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---


### StorageTransferJobScheduleScheduleEndDateOutputReference <a name="StorageTransferJobScheduleScheduleEndDateOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobScheduleScheduleEndDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobScheduleScheduleEndDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---


### StorageTransferJobScheduleScheduleStartDateOutputReference <a name="StorageTransferJobScheduleScheduleStartDateOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobScheduleScheduleStartDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobScheduleScheduleStartDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---


### StorageTransferJobScheduleStartTimeOfDayOutputReference <a name="StorageTransferJobScheduleStartTimeOfDayOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobScheduleStartTimeOfDayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobScheduleStartTimeOfDayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---


### StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference <a name="StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---


### StorageTransferJobTransferSpecAwsS3DataSourceOutputReference <a name="StorageTransferJobTransferSpecAwsS3DataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecAwsS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecAwsS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey">PutAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey">ResetAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccessKey` <a name="PutAwsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey"></a>

```go
func PutAwsAccessKey(value StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `ResetAwsAccessKey` <a name="ResetAwsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey"></a>

```go
func ResetAwsAccessKey()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput">AwsAccessKeyInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccessKey`<sup>Required</sup> <a name="AwsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey"></a>

```go
func AwsAccessKey() StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a>

---

##### `AwsAccessKeyInput`<sup>Optional</sup> <a name="AwsAccessKeyInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput"></a>

```go
func AwsAccessKeyInput() StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---


### StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput">SasTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken">SasToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput"></a>

```go
func SasTokenInput() *string
```

- *Type:* *string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken"></a>

```go
func SasToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---


### StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials">PutAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureCredentials` <a name="PutAzureCredentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials"></a>

```go
func PutAzureCredentials(value StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials">AzureCredentials</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput">AzureCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput">StorageAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount">StorageAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureCredentials`<sup>Required</sup> <a name="AzureCredentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials"></a>

```go
func AzureCredentials() StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a>

---

##### `AzureCredentialsInput`<sup>Optional</sup> <a name="AzureCredentialsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput"></a>

```go
func AzureCredentialsInput() StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput"></a>

```go
func StorageAccountInput() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount"></a>

```go
func StorageAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---


### StorageTransferJobTransferSpecGcsDataSinkOutputReference <a name="StorageTransferJobTransferSpecGcsDataSinkOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecGcsDataSinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecGcsDataSinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---


### StorageTransferJobTransferSpecGcsDataSourceOutputReference <a name="StorageTransferJobTransferSpecGcsDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecGcsDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecGcsDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---


### StorageTransferJobTransferSpecHttpDataSourceOutputReference <a name="StorageTransferJobTransferSpecHttpDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecHttpDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecHttpDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput">ListUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl">ListUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListUrlInput`<sup>Optional</sup> <a name="ListUrlInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput"></a>

```go
func ListUrlInput() *string
```

- *Type:* *string

---

##### `ListUrl`<sup>Required</sup> <a name="ListUrl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl"></a>

```go
func ListUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---


### StorageTransferJobTransferSpecObjectConditionsOutputReference <a name="StorageTransferJobTransferSpecObjectConditionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecObjectConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecObjectConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes">ResetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes">ResetIncludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore">ResetLastModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince">ResetLastModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">ResetMaxTimeElapsedSinceLastModification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">ResetMinTimeElapsedSinceLastModification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludePrefixes` <a name="ResetExcludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```go
func ResetExcludePrefixes()
```

##### `ResetIncludePrefixes` <a name="ResetIncludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```go
func ResetIncludePrefixes()
```

##### `ResetLastModifiedBefore` <a name="ResetLastModifiedBefore" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```go
func ResetLastModifiedBefore()
```

##### `ResetLastModifiedSince` <a name="ResetLastModifiedSince" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```go
func ResetLastModifiedSince()
```

##### `ResetMaxTimeElapsedSinceLastModification` <a name="ResetMaxTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```go
func ResetMaxTimeElapsedSinceLastModification()
```

##### `ResetMinTimeElapsedSinceLastModification` <a name="ResetMinTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```go
func ResetMinTimeElapsedSinceLastModification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput">ExcludePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput">IncludePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">LastModifiedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">LastModifiedSinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">MaxTimeElapsedSinceLastModificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">MinTimeElapsedSinceLastModificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes">ExcludePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes">IncludePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore">LastModifiedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince">LastModifiedSince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">MaxTimeElapsedSinceLastModification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">MinTimeElapsedSinceLastModification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludePrefixesInput`<sup>Optional</sup> <a name="ExcludePrefixesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```go
func ExcludePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePrefixesInput`<sup>Optional</sup> <a name="IncludePrefixesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```go
func IncludePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LastModifiedBeforeInput`<sup>Optional</sup> <a name="LastModifiedBeforeInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```go
func LastModifiedBeforeInput() *string
```

- *Type:* *string

---

##### `LastModifiedSinceInput`<sup>Optional</sup> <a name="LastModifiedSinceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```go
func LastModifiedSinceInput() *string
```

- *Type:* *string

---

##### `MaxTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MaxTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```go
func MaxTimeElapsedSinceLastModificationInput() *string
```

- *Type:* *string

---

##### `MinTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="MinTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```go
func MinTimeElapsedSinceLastModificationInput() *string
```

- *Type:* *string

---

##### `ExcludePrefixes`<sup>Required</sup> <a name="ExcludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```go
func ExcludePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePrefixes`<sup>Required</sup> <a name="IncludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```go
func IncludePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `LastModifiedBefore`<sup>Required</sup> <a name="LastModifiedBefore" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```go
func LastModifiedBefore() *string
```

- *Type:* *string

---

##### `LastModifiedSince`<sup>Required</sup> <a name="LastModifiedSince" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```go
func LastModifiedSince() *string
```

- *Type:* *string

---

##### `MaxTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MaxTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```go
func MaxTimeElapsedSinceLastModification() *string
```

- *Type:* *string

---

##### `MinTimeElapsedSinceLastModification`<sup>Required</sup> <a name="MinTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```go
func MinTimeElapsedSinceLastModification() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---


### StorageTransferJobTransferSpecOutputReference <a name="StorageTransferJobTransferSpecOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource">PutAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource">PutAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink">PutGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource">PutGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource">PutHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions">PutObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink">PutPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource">PutPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions">PutTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource">ResetAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource">ResetAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSink">ResetGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSource">ResetGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHttpDataSource">ResetHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetObjectConditions">ResetObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSink">ResetPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSource">ResetPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName">ResetSinkAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName">ResetSourceAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetTransferOptions">ResetTransferOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsS3DataSource` <a name="PutAwsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource"></a>

```go
func PutAwsS3DataSource(value StorageTransferJobTransferSpecAwsS3DataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `PutAzureBlobStorageDataSource` <a name="PutAzureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource"></a>

```go
func PutAzureBlobStorageDataSource(value StorageTransferJobTransferSpecAzureBlobStorageDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `PutGcsDataSink` <a name="PutGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink"></a>

```go
func PutGcsDataSink(value StorageTransferJobTransferSpecGcsDataSink)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---

##### `PutGcsDataSource` <a name="PutGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource"></a>

```go
func PutGcsDataSource(value StorageTransferJobTransferSpecGcsDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---

##### `PutHttpDataSource` <a name="PutHttpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource"></a>

```go
func PutHttpDataSource(value StorageTransferJobTransferSpecHttpDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---

##### `PutObjectConditions` <a name="PutObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions"></a>

```go
func PutObjectConditions(value StorageTransferJobTransferSpecObjectConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---

##### `PutPosixDataSink` <a name="PutPosixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink"></a>

```go
func PutPosixDataSink(value StorageTransferJobTransferSpecPosixDataSink)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---

##### `PutPosixDataSource` <a name="PutPosixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource"></a>

```go
func PutPosixDataSource(value StorageTransferJobTransferSpecPosixDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---

##### `PutTransferOptions` <a name="PutTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions"></a>

```go
func PutTransferOptions(value StorageTransferJobTransferSpecTransferOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---

##### `ResetAwsS3DataSource` <a name="ResetAwsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource"></a>

```go
func ResetAwsS3DataSource()
```

##### `ResetAzureBlobStorageDataSource` <a name="ResetAzureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource"></a>

```go
func ResetAzureBlobStorageDataSource()
```

##### `ResetGcsDataSink` <a name="ResetGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSink"></a>

```go
func ResetGcsDataSink()
```

##### `ResetGcsDataSource` <a name="ResetGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSource"></a>

```go
func ResetGcsDataSource()
```

##### `ResetHttpDataSource` <a name="ResetHttpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHttpDataSource"></a>

```go
func ResetHttpDataSource()
```

##### `ResetObjectConditions` <a name="ResetObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetObjectConditions"></a>

```go
func ResetObjectConditions()
```

##### `ResetPosixDataSink` <a name="ResetPosixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSink"></a>

```go
func ResetPosixDataSink()
```

##### `ResetPosixDataSource` <a name="ResetPosixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSource"></a>

```go
func ResetPosixDataSource()
```

##### `ResetSinkAgentPoolName` <a name="ResetSinkAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName"></a>

```go
func ResetSinkAgentPoolName()
```

##### `ResetSourceAgentPoolName` <a name="ResetSourceAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName"></a>

```go
func ResetSourceAgentPoolName()
```

##### `ResetTransferOptions` <a name="ResetTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetTransferOptions"></a>

```go
func ResetTransferOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSource">AwsS3DataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource">AzureBlobStorageDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSink">GcsDataSink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference">StorageTransferJobTransferSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSource">GcsDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference">StorageTransferJobTransferSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSource">HttpDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference">StorageTransferJobTransferSpecHttpDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditions">ObjectConditions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference">StorageTransferJobTransferSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSink">PosixDataSink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference">StorageTransferJobTransferSpecPosixDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSource">PosixDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference">StorageTransferJobTransferSpecPosixDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptions">TransferOptions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput">AwsS3DataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput">AzureBlobStorageDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput">GcsDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput">GcsDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput">HttpDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditionsInput">ObjectConditionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput">PosixDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput">PosixDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput">SinkAgentPoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput">SourceAgentPoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptionsInput">TransferOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName">SinkAgentPoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName">SourceAgentPoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsS3DataSource`<sup>Required</sup> <a name="AwsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSource"></a>

```go
func AwsS3DataSource() StorageTransferJobTransferSpecAwsS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a>

---

##### `AzureBlobStorageDataSource`<sup>Required</sup> <a name="AzureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource"></a>

```go
func AzureBlobStorageDataSource() StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a>

---

##### `GcsDataSink`<sup>Required</sup> <a name="GcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSink"></a>

```go
func GcsDataSink() StorageTransferJobTransferSpecGcsDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference">StorageTransferJobTransferSpecGcsDataSinkOutputReference</a>

---

##### `GcsDataSource`<sup>Required</sup> <a name="GcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSource"></a>

```go
func GcsDataSource() StorageTransferJobTransferSpecGcsDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference">StorageTransferJobTransferSpecGcsDataSourceOutputReference</a>

---

##### `HttpDataSource`<sup>Required</sup> <a name="HttpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSource"></a>

```go
func HttpDataSource() StorageTransferJobTransferSpecHttpDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference">StorageTransferJobTransferSpecHttpDataSourceOutputReference</a>

---

##### `ObjectConditions`<sup>Required</sup> <a name="ObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditions"></a>

```go
func ObjectConditions() StorageTransferJobTransferSpecObjectConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference">StorageTransferJobTransferSpecObjectConditionsOutputReference</a>

---

##### `PosixDataSink`<sup>Required</sup> <a name="PosixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSink"></a>

```go
func PosixDataSink() StorageTransferJobTransferSpecPosixDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference">StorageTransferJobTransferSpecPosixDataSinkOutputReference</a>

---

##### `PosixDataSource`<sup>Required</sup> <a name="PosixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSource"></a>

```go
func PosixDataSource() StorageTransferJobTransferSpecPosixDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference">StorageTransferJobTransferSpecPosixDataSourceOutputReference</a>

---

##### `TransferOptions`<sup>Required</sup> <a name="TransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptions"></a>

```go
func TransferOptions() StorageTransferJobTransferSpecTransferOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsOutputReference</a>

---

##### `AwsS3DataSourceInput`<sup>Optional</sup> <a name="AwsS3DataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput"></a>

```go
func AwsS3DataSourceInput() StorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `AzureBlobStorageDataSourceInput`<sup>Optional</sup> <a name="AzureBlobStorageDataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput"></a>

```go
func AzureBlobStorageDataSourceInput() StorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `GcsDataSinkInput`<sup>Optional</sup> <a name="GcsDataSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput"></a>

```go
func GcsDataSinkInput() StorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---

##### `GcsDataSourceInput`<sup>Optional</sup> <a name="GcsDataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput"></a>

```go
func GcsDataSourceInput() StorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---

##### `HttpDataSourceInput`<sup>Optional</sup> <a name="HttpDataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput"></a>

```go
func HttpDataSourceInput() StorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---

##### `ObjectConditionsInput`<sup>Optional</sup> <a name="ObjectConditionsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditionsInput"></a>

```go
func ObjectConditionsInput() StorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---

##### `PosixDataSinkInput`<sup>Optional</sup> <a name="PosixDataSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput"></a>

```go
func PosixDataSinkInput() StorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---

##### `PosixDataSourceInput`<sup>Optional</sup> <a name="PosixDataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput"></a>

```go
func PosixDataSourceInput() StorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---

##### `SinkAgentPoolNameInput`<sup>Optional</sup> <a name="SinkAgentPoolNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput"></a>

```go
func SinkAgentPoolNameInput() *string
```

- *Type:* *string

---

##### `SourceAgentPoolNameInput`<sup>Optional</sup> <a name="SourceAgentPoolNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput"></a>

```go
func SourceAgentPoolNameInput() *string
```

- *Type:* *string

---

##### `TransferOptionsInput`<sup>Optional</sup> <a name="TransferOptionsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptionsInput"></a>

```go
func TransferOptionsInput() StorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---

##### `SinkAgentPoolName`<sup>Required</sup> <a name="SinkAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName"></a>

```go
func SinkAgentPoolName() *string
```

- *Type:* *string

---

##### `SourceAgentPoolName`<sup>Required</sup> <a name="SourceAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName"></a>

```go
func SourceAgentPoolName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---


### StorageTransferJobTransferSpecPosixDataSinkOutputReference <a name="StorageTransferJobTransferSpecPosixDataSinkOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecPosixDataSinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecPosixDataSinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput"></a>

```go
func RootDirectoryInput() *string
```

- *Type:* *string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory"></a>

```go
func RootDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---


### StorageTransferJobTransferSpecPosixDataSourceOutputReference <a name="StorageTransferJobTransferSpecPosixDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecPosixDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecPosixDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput"></a>

```go
func RootDirectoryInput() *string
```

- *Type:* *string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory"></a>

```go
func RootDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---


### StorageTransferJobTransferSpecTransferOptionsOutputReference <a name="StorageTransferJobTransferSpecTransferOptionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagetransferjob"

storagetransferjob.NewStorageTransferJobTransferSpecTransferOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageTransferJobTransferSpecTransferOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">ResetDeleteObjectsFromSourceAfterTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">ResetDeleteObjectsUniqueInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">ResetOverwriteObjectsAlreadyExistingInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen">ResetOverwriteWhen</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteObjectsFromSourceAfterTransfer` <a name="ResetDeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```go
func ResetDeleteObjectsFromSourceAfterTransfer()
```

##### `ResetDeleteObjectsUniqueInSink` <a name="ResetDeleteObjectsUniqueInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```go
func ResetDeleteObjectsUniqueInSink()
```

##### `ResetOverwriteObjectsAlreadyExistingInSink` <a name="ResetOverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```go
func ResetOverwriteObjectsAlreadyExistingInSink()
```

##### `ResetOverwriteWhen` <a name="ResetOverwriteWhen" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```go
func ResetOverwriteWhen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">DeleteObjectsFromSourceAfterTransferInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">DeleteObjectsUniqueInSinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">OverwriteObjectsAlreadyExistingInSinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput">OverwriteWhenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">DeleteObjectsFromSourceAfterTransfer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">DeleteObjectsUniqueInSink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">OverwriteObjectsAlreadyExistingInSink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen">OverwriteWhen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteObjectsFromSourceAfterTransferInput`<sup>Optional</sup> <a name="DeleteObjectsFromSourceAfterTransferInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```go
func DeleteObjectsFromSourceAfterTransferInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteObjectsUniqueInSinkInput`<sup>Optional</sup> <a name="DeleteObjectsUniqueInSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```go
func DeleteObjectsUniqueInSinkInput() interface{}
```

- *Type:* interface{}

---

##### `OverwriteObjectsAlreadyExistingInSinkInput`<sup>Optional</sup> <a name="OverwriteObjectsAlreadyExistingInSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```go
func OverwriteObjectsAlreadyExistingInSinkInput() interface{}
```

- *Type:* interface{}

---

##### `OverwriteWhenInput`<sup>Optional</sup> <a name="OverwriteWhenInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```go
func OverwriteWhenInput() *string
```

- *Type:* *string

---

##### `DeleteObjectsFromSourceAfterTransfer`<sup>Required</sup> <a name="DeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```go
func DeleteObjectsFromSourceAfterTransfer() interface{}
```

- *Type:* interface{}

---

##### `DeleteObjectsUniqueInSink`<sup>Required</sup> <a name="DeleteObjectsUniqueInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```go
func DeleteObjectsUniqueInSink() interface{}
```

- *Type:* interface{}

---

##### `OverwriteObjectsAlreadyExistingInSink`<sup>Required</sup> <a name="OverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```go
func OverwriteObjectsAlreadyExistingInSink() interface{}
```

- *Type:* interface{}

---

##### `OverwriteWhen`<sup>Required</sup> <a name="OverwriteWhen" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```go
func OverwriteWhen() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---



