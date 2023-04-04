# `healthcareDicomStore` Submodule <a name="`healthcareDicomStore` Submodule" id="@cdktf/provider-google.healthcareDicomStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareDicomStore <a name="HealthcareDicomStore" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store google_healthcare_dicom_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstore"

healthcaredicomstore.NewHealthcareDicomStore(scope Construct, id *string, config HealthcareDicomStoreConfig) HealthcareDicomStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig">HealthcareDicomStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig">HealthcareDicomStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putNotificationConfig"></a>

```go
func PutNotificationConfig(value HealthcareDicomStoreNotificationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putTimeouts"></a>

```go
func PutTimeouts(value HealthcareDicomStoreTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetNotificationConfig"></a>

```go
func ResetNotificationConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstore"

healthcaredicomstore.HealthcareDicomStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstore"

healthcaredicomstore.HealthcareDicomStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstore"

healthcaredicomstore.HealthcareDicomStore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference">HealthcareDicomStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference">HealthcareDicomStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.notificationConfig"></a>

```go
func NotificationConfig() HealthcareDicomStoreNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference">HealthcareDicomStoreNotificationConfigOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.timeouts"></a>

```go
func Timeouts() HealthcareDicomStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference">HealthcareDicomStoreTimeoutsOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.notificationConfigInput"></a>

```go
func NotificationConfigInput() HealthcareDicomStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareDicomStoreConfig <a name="HealthcareDicomStoreConfig" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstore"

&healthcaredicomstore.HealthcareDicomStoreConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Dataset: *string,
	Name: *string,
	Id: *string,
	Labels: *map[string]*string,
	NotificationConfig: github.com/cdktf/cdktf-provider-google-go/google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.healthcareDicomStore.HealthcareDicomStoreTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.dataset">Dataset</a></code> | <code>*string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.name">Name</a></code> | <code>*string</code> | The resource name for the DicomStore. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#id HealthcareDicomStore#id}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-supplied key-value pairs used to organize DICOM stores. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#dataset HealthcareDicomStore#dataset}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name for the DicomStore.

* Changing this property may recreate the Dicom store (removing all data) **

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#name HealthcareDicomStore#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#id HealthcareDicomStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-supplied key-value pairs used to organize DICOM stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#labels HealthcareDicomStore#labels}

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.notificationConfig"></a>

```go
NotificationConfig HealthcareDicomStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#notification_config HealthcareDicomStore#notification_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreConfig.property.timeouts"></a>

```go
Timeouts HealthcareDicomStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts">HealthcareDicomStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#timeouts HealthcareDicomStore#timeouts}

---

### HealthcareDicomStoreNotificationConfig <a name="HealthcareDicomStoreNotificationConfig" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstore"

&healthcaredicomstore.HealthcareDicomStoreNotificationConfig {
	PubsubTopic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig.property.pubsubTopic"></a>

```go
PubsubTopic *string
```

- *Type:* *string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#pubsub_topic HealthcareDicomStore#pubsub_topic}

---

### HealthcareDicomStoreTimeouts <a name="HealthcareDicomStoreTimeouts" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstore"

&healthcaredicomstore.HealthcareDicomStoreTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#create HealthcareDicomStore#create}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#delete HealthcareDicomStore#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#update HealthcareDicomStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#create HealthcareDicomStore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#delete HealthcareDicomStore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store#update HealthcareDicomStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareDicomStoreNotificationConfigOutputReference <a name="HealthcareDicomStoreNotificationConfigOutputReference" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstore"

healthcaredicomstore.NewHealthcareDicomStoreNotificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareDicomStoreNotificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```go
func PubsubTopicInput() *string
```

- *Type:* *string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareDicomStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreNotificationConfig">HealthcareDicomStoreNotificationConfig</a>

---


### HealthcareDicomStoreTimeoutsOutputReference <a name="HealthcareDicomStoreTimeoutsOutputReference" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstore"

healthcaredicomstore.NewHealthcareDicomStoreTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareDicomStoreTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareDicomStore.HealthcareDicomStoreTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



