# `dataGoogleClouddeployDeliveryPipelineIamPolicy` Submodule <a name="`dataGoogleClouddeployDeliveryPipelineIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleClouddeployDeliveryPipelineIamPolicy <a name="DataGoogleClouddeployDeliveryPipelineIamPolicy" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy google_clouddeploy_delivery_pipeline_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer"></a>

```typescript
import { dataGoogleClouddeployDeliveryPipelineIamPolicy } from '@cdktf/provider-google'

new dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy(scope: Construct, id: string, config: DataGoogleClouddeployDeliveryPipelineIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig">DataGoogleClouddeployDeliveryPipelineIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig">DataGoogleClouddeployDeliveryPipelineIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleClouddeployDeliveryPipelineIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleClouddeployDeliveryPipelineIamPolicy } from '@cdktf/provider-google'

dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleClouddeployDeliveryPipelineIamPolicy } from '@cdktf/provider-google'

dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleClouddeployDeliveryPipelineIamPolicy } from '@cdktf/provider-google'

dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleClouddeployDeliveryPipelineIamPolicy } from '@cdktf/provider-google'

dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleClouddeployDeliveryPipelineIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleClouddeployDeliveryPipelineIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleClouddeployDeliveryPipelineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleClouddeployDeliveryPipelineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleClouddeployDeliveryPipelineIamPolicyConfig <a name="DataGoogleClouddeployDeliveryPipelineIamPolicyConfig" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleClouddeployDeliveryPipelineIamPolicy } from '@cdktf/provider-google'

const dataGoogleClouddeployDeliveryPipelineIamPolicyConfig: dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#name DataGoogleClouddeployDeliveryPipelineIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#id DataGoogleClouddeployDeliveryPipelineIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#location DataGoogleClouddeployDeliveryPipelineIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#project DataGoogleClouddeployDeliveryPipelineIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#name DataGoogleClouddeployDeliveryPipelineIamPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#id DataGoogleClouddeployDeliveryPipelineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#location DataGoogleClouddeployDeliveryPipelineIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleClouddeployDeliveryPipelineIamPolicy.DataGoogleClouddeployDeliveryPipelineIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/data-sources/clouddeploy_delivery_pipeline_iam_policy#project DataGoogleClouddeployDeliveryPipelineIamPolicy#project}.

---



