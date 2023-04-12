# `workflowsWorkflow` Submodule <a name="`workflowsWorkflow` Submodule" id="@cdktf/provider-google.workflowsWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkflowsWorkflow <a name="WorkflowsWorkflow" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow google_workflows_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/workflowsworkflow"

workflowsworkflow.NewWorkflowsWorkflow(scope Construct, id *string, config WorkflowsWorkflowConfig) WorkflowsWorkflow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig">WorkflowsWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig">WorkflowsWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetSourceContents">ResetSourceContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts"></a>

```go
func PutTimeouts(value WorkflowsWorkflowTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetSourceContents` <a name="ResetSourceContents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetSourceContents"></a>

```go
func ResetSourceContents()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/workflowsworkflow"

workflowsworkflow.WorkflowsWorkflow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/workflowsworkflow"

workflowsworkflow.WorkflowsWorkflow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/workflowsworkflow"

workflowsworkflow.WorkflowsWorkflow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.revisionId">RevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference">WorkflowsWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContentsInput">SourceContentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContents">SourceContents</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.revisionId"></a>

```go
func RevisionId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeouts"></a>

```go
func Timeouts() WorkflowsWorkflowTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference">WorkflowsWorkflowTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `SourceContentsInput`<sup>Optional</sup> <a name="SourceContentsInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContentsInput"></a>

```go
func SourceContentsInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `SourceContents`<sup>Required</sup> <a name="SourceContents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContents"></a>

```go
func SourceContents() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowsWorkflowConfig <a name="WorkflowsWorkflowConfig" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/workflowsworkflow"

&workflowsworkflow.WorkflowsWorkflowConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Name: *string,
	NamePrefix: *string,
	Project: *string,
	Region: *string,
	ServiceAccount: *string,
	SourceContents: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.workflowsWorkflow.WorkflowsWorkflowTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.description">Description</a></code> | <code>*string</code> | Description of the workflow provided by the user. Must be at most 1000 unicode characters long. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#id WorkflowsWorkflow#id}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key/value label pairs to assign to this Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#project WorkflowsWorkflow#project}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.region">Region</a></code> | <code>*string</code> | The region of the workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Name of the service account associated with the latest workflow version. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.sourceContents">SourceContents</a></code> | <code>*string</code> | Workflow code to be executed. The size limit is 32KB. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the workflow provided by the user. Must be at most 1000 unicode characters long.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#description WorkflowsWorkflow#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#id WorkflowsWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key/value label pairs to assign to this Workflow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#labels WorkflowsWorkflow#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Workflow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#name WorkflowsWorkflow#name}

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#project WorkflowsWorkflow#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the workflow.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#region WorkflowsWorkflow#region}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Name of the service account associated with the latest workflow version.

This service
account represents the identity of the workflow and determines what permissions the workflow has.

Format: projects/{project}/serviceAccounts/{account}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#service_account WorkflowsWorkflow#service_account}

---

##### `SourceContents`<sup>Optional</sup> <a name="SourceContents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.sourceContents"></a>

```go
SourceContents *string
```

- *Type:* *string

Workflow code to be executed. The size limit is 32KB.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#source_contents WorkflowsWorkflow#source_contents}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.timeouts"></a>

```go
Timeouts WorkflowsWorkflowTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#timeouts WorkflowsWorkflow#timeouts}

---

### WorkflowsWorkflowTimeouts <a name="WorkflowsWorkflowTimeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/workflowsworkflow"

&workflowsworkflow.WorkflowsWorkflowTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#create WorkflowsWorkflow#create}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#delete WorkflowsWorkflow#delete}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#update WorkflowsWorkflow#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#create WorkflowsWorkflow#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#delete WorkflowsWorkflow#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/workflows_workflow#update WorkflowsWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkflowsWorkflowTimeoutsOutputReference <a name="WorkflowsWorkflowTimeoutsOutputReference" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/workflowsworkflow"

workflowsworkflow.NewWorkflowsWorkflowTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkflowsWorkflowTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



