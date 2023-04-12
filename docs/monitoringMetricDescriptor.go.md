# `monitoringMetricDescriptor` Submodule <a name="`monitoringMetricDescriptor` Submodule" id="@cdktf/provider-google.monitoringMetricDescriptor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringMetricDescriptor <a name="MonitoringMetricDescriptor" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor google_monitoring_metric_descriptor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

monitoringmetricdescriptor.NewMonitoringMetricDescriptor(scope Construct, id *string, config MonitoringMetricDescriptorConfig) MonitoringMetricDescriptor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig">MonitoringMetricDescriptorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig">MonitoringMetricDescriptorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLaunchStage">ResetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels"></a>

```go
func PutLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata"></a>

```go
func PutMetadata(value MonitoringMetricDescriptorMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts"></a>

```go
func PutTimeouts(value MonitoringMetricDescriptorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLaunchStage` <a name="ResetLaunchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLaunchStage"></a>

```go
func ResetLaunchStage()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetUnit"></a>

```go
func ResetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

monitoringmetricdescriptor.MonitoringMetricDescriptor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

monitoringmetricdescriptor.MonitoringMetricDescriptor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

monitoringmetricdescriptor.MonitoringMetricDescriptor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList">MonitoringMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference">MonitoringMetricDescriptorMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.monitoredResourceTypes">MonitoredResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference">MonitoringMetricDescriptorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labelsInput">LabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStageInput">LaunchStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKindInput">MetricKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStage">LaunchStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKind">MetricKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labels"></a>

```go
func Labels() MonitoringMetricDescriptorLabelsList
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList">MonitoringMetricDescriptorLabelsList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadata"></a>

```go
func Metadata() MonitoringMetricDescriptorMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference">MonitoringMetricDescriptorMetadataOutputReference</a>

---

##### `MonitoredResourceTypes`<sup>Required</sup> <a name="MonitoredResourceTypes" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.monitoredResourceTypes"></a>

```go
func MonitoredResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeouts"></a>

```go
func Timeouts() MonitoringMetricDescriptorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference">MonitoringMetricDescriptorTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labelsInput"></a>

```go
func LabelsInput() interface{}
```

- *Type:* interface{}

---

##### `LaunchStageInput`<sup>Optional</sup> <a name="LaunchStageInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStageInput"></a>

```go
func LaunchStageInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadataInput"></a>

```go
func MetadataInput() MonitoringMetricDescriptorMetadata
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---

##### `MetricKindInput`<sup>Optional</sup> <a name="MetricKindInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKindInput"></a>

```go
func MetricKindInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LaunchStage`<sup>Required</sup> <a name="LaunchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStage"></a>

```go
func LaunchStage() *string
```

- *Type:* *string

---

##### `MetricKind`<sup>Required</sup> <a name="MetricKind" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKind"></a>

```go
func MetricKind() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringMetricDescriptorConfig <a name="MonitoringMetricDescriptorConfig" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

&monitoringmetricdescriptor.MonitoringMetricDescriptorConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	DisplayName: *string,
	MetricKind: *string,
	Type: *string,
	ValueType: *string,
	Id: *string,
	Labels: interface{},
	LaunchStage: *string,
	Metadata: github.com/cdktf/cdktf-provider-google-go/google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.description">Description</a></code> | <code>*string</code> | A detailed description of the metric, which can be used in documentation. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metricKind">MetricKind</a></code> | <code>*string</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.type">Type</a></code> | <code>*string</code> | The metric type, including its DNS name prefix. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.valueType">ValueType</a></code> | <code>*string</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#id MonitoringMetricDescriptor#id}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.labels">Labels</a></code> | <code>interface{}</code> | labels block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.launchStage">LaunchStage</a></code> | <code>*string</code> | The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.unit">Unit</a></code> | <code>*string</code> | The units in which the metric value is reported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A detailed description of the metric, which can be used in documentation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case without an ending period, for example "Request count".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#display_name MonitoringMetricDescriptor#display_name}

---

##### `MetricKind`<sup>Required</sup> <a name="MetricKind" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metricKind"></a>

```go
MetricKind *string
```

- *Type:* *string

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#metric_kind MonitoringMetricDescriptor#metric_kind}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The metric type, including its DNS name prefix.

The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#type MonitoringMetricDescriptor#type}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#id MonitoringMetricDescriptor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.labels"></a>

```go
Labels interface{}
```

- *Type:* interface{}

labels block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#labels MonitoringMetricDescriptor#labels}

---

##### `LaunchStage`<sup>Optional</sup> <a name="LaunchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.launchStage"></a>

```go
LaunchStage *string
```

- *Type:* *string

The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#launch_stage MonitoringMetricDescriptor#launch_stage}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metadata"></a>

```go
Metadata MonitoringMetricDescriptorMetadata
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#metadata MonitoringMetricDescriptor#metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.timeouts"></a>

```go
Timeouts MonitoringMetricDescriptorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#timeouts MonitoringMetricDescriptor#timeouts}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

The units in which the metric value is reported.

It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#unit MonitoringMetricDescriptor#unit}

---

### MonitoringMetricDescriptorLabels <a name="MonitoringMetricDescriptorLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

&monitoringmetricdescriptor.MonitoringMetricDescriptorLabels {
	Key: *string,
	Description: *string,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.key">Key</a></code> | <code>*string</code> | The key for this label. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.description">Description</a></code> | <code>*string</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.valueType">ValueType</a></code> | <code>*string</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key for this label.

The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]*

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#key MonitoringMetricDescriptor#key}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description for the label.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}

---

### MonitoringMetricDescriptorMetadata <a name="MonitoringMetricDescriptorMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

&monitoringmetricdescriptor.MonitoringMetricDescriptorMetadata {
	IngestDelay: *string,
	SamplePeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.ingestDelay">IngestDelay</a></code> | <code>*string</code> | The delay of data points caused by ingestion. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.samplePeriod">SamplePeriod</a></code> | <code>*string</code> | The sampling period of metric data points. |

---

##### `IngestDelay`<sup>Optional</sup> <a name="IngestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.ingestDelay"></a>

```go
IngestDelay *string
```

- *Type:* *string

The delay of data points caused by ingestion.

Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#ingest_delay MonitoringMetricDescriptor#ingest_delay}

---

##### `SamplePeriod`<sup>Optional</sup> <a name="SamplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.samplePeriod"></a>

```go
SamplePeriod *string
```

- *Type:* *string

The sampling period of metric data points.

For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#sample_period MonitoringMetricDescriptor#sample_period}

---

### MonitoringMetricDescriptorTimeouts <a name="MonitoringMetricDescriptorTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

&monitoringmetricdescriptor.MonitoringMetricDescriptorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#create MonitoringMetricDescriptor#create}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#delete MonitoringMetricDescriptor#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#update MonitoringMetricDescriptor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#create MonitoringMetricDescriptor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#delete MonitoringMetricDescriptor#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#update MonitoringMetricDescriptor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringMetricDescriptorLabelsList <a name="MonitoringMetricDescriptorLabelsList" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

monitoringmetricdescriptor.NewMonitoringMetricDescriptorLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitoringMetricDescriptorLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get"></a>

```go
func Get(index *f64) MonitoringMetricDescriptorLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitoringMetricDescriptorLabelsOutputReference <a name="MonitoringMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

monitoringmetricdescriptor.NewMonitoringMetricDescriptorLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitoringMetricDescriptorLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetValueType"></a>

```go
func ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitoringMetricDescriptorMetadataOutputReference <a name="MonitoringMetricDescriptorMetadataOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

monitoringmetricdescriptor.NewMonitoringMetricDescriptorMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringMetricDescriptorMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay">ResetIngestDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod">ResetSamplePeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIngestDelay` <a name="ResetIngestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay"></a>

```go
func ResetIngestDelay()
```

##### `ResetSamplePeriod` <a name="ResetSamplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod"></a>

```go
func ResetSamplePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput">IngestDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput">SamplePeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay">IngestDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod">SamplePeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngestDelayInput`<sup>Optional</sup> <a name="IngestDelayInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput"></a>

```go
func IngestDelayInput() *string
```

- *Type:* *string

---

##### `SamplePeriodInput`<sup>Optional</sup> <a name="SamplePeriodInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput"></a>

```go
func SamplePeriodInput() *string
```

- *Type:* *string

---

##### `IngestDelay`<sup>Required</sup> <a name="IngestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay"></a>

```go
func IngestDelay() *string
```

- *Type:* *string

---

##### `SamplePeriod`<sup>Required</sup> <a name="SamplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod"></a>

```go
func SamplePeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitoringMetricDescriptorMetadata
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---


### MonitoringMetricDescriptorTimeoutsOutputReference <a name="MonitoringMetricDescriptorTimeoutsOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/monitoringmetricdescriptor"

monitoringmetricdescriptor.NewMonitoringMetricDescriptorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitoringMetricDescriptorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



