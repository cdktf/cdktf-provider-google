# `dataGoogleDataplexEntryGroupIamPolicy` Submodule <a name="`dataGoogleDataplexEntryGroupIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataplexEntryGroupIamPolicy <a name="DataGoogleDataplexEntryGroupIamPolicy" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/dataplex_entry_group_iam_policy google_dataplex_entry_group_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogledataplexentrygroupiampolicy"

datagoogledataplexentrygroupiampolicy.NewDataGoogleDataplexEntryGroupIamPolicy(scope Construct, id *string, config DataGoogleDataplexEntryGroupIamPolicyConfig) DataGoogleDataplexEntryGroupIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig">DataGoogleDataplexEntryGroupIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig">DataGoogleDataplexEntryGroupIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDataplexEntryGroupIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogledataplexentrygroupiampolicy"

datagoogledataplexentrygroupiampolicy.DataGoogleDataplexEntryGroupIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogledataplexentrygroupiampolicy"

datagoogledataplexentrygroupiampolicy.DataGoogleDataplexEntryGroupIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogledataplexentrygroupiampolicy"

datagoogledataplexentrygroupiampolicy.DataGoogleDataplexEntryGroupIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogledataplexentrygroupiampolicy"

datagoogledataplexentrygroupiampolicy.DataGoogleDataplexEntryGroupIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleDataplexEntryGroupIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleDataplexEntryGroupIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleDataplexEntryGroupIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/dataplex_entry_group_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDataplexEntryGroupIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.entryGroupIdInput">EntryGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.entryGroupId">EntryGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `EntryGroupIdInput`<sup>Optional</sup> <a name="EntryGroupIdInput" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.entryGroupIdInput"></a>

```go
func EntryGroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `EntryGroupId`<sup>Required</sup> <a name="EntryGroupId" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.entryGroupId"></a>

```go
func EntryGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataplexEntryGroupIamPolicyConfig <a name="DataGoogleDataplexEntryGroupIamPolicyConfig" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogledataplexentrygroupiampolicy"

&datagoogledataplexentrygroupiampolicy.DataGoogleDataplexEntryGroupIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EntryGroupId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.entryGroupId">EntryGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/dataplex_entry_group_iam_policy#entry_group_id DataGoogleDataplexEntryGroupIamPolicy#entry_group_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/dataplex_entry_group_iam_policy#id DataGoogleDataplexEntryGroupIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/dataplex_entry_group_iam_policy#location DataGoogleDataplexEntryGroupIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/dataplex_entry_group_iam_policy#project DataGoogleDataplexEntryGroupIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntryGroupId`<sup>Required</sup> <a name="EntryGroupId" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.entryGroupId"></a>

```go
EntryGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/dataplex_entry_group_iam_policy#entry_group_id DataGoogleDataplexEntryGroupIamPolicy#entry_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/dataplex_entry_group_iam_policy#id DataGoogleDataplexEntryGroupIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/dataplex_entry_group_iam_policy#location DataGoogleDataplexEntryGroupIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleDataplexEntryGroupIamPolicy.DataGoogleDataplexEntryGroupIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/dataplex_entry_group_iam_policy#project DataGoogleDataplexEntryGroupIamPolicy#project}.

---



