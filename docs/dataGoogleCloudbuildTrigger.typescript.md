# `dataGoogleCloudbuildTrigger` Submodule <a name="`dataGoogleCloudbuildTrigger` Submodule" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudbuildTrigger <a name="DataGoogleCloudbuildTrigger" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/cloudbuild_trigger google_cloudbuild_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger(scope: Construct, id: string, config: DataGoogleCloudbuildTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig">DataGoogleCloudbuildTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig">DataGoogleCloudbuildTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudbuildTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isConstruct"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformElement"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleCloudbuildTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudbuildTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudbuildTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/cloudbuild_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudbuildTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.approvalConfig">approvalConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList">DataGoogleCloudbuildTriggerApprovalConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.bitbucketServerTriggerConfig">bitbucketServerTriggerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList">DataGoogleCloudbuildTriggerBuildList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.gitFileSource">gitFileSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList">DataGoogleCloudbuildTriggerGitFileSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.github">github</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList">DataGoogleCloudbuildTriggerGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.ignoredFiles">ignoredFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includeBuildLogs">includeBuildLogs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includedFiles">includedFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.pubsubConfig">pubsubConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList">DataGoogleCloudbuildTriggerPubsubConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.repositoryEventConfig">repositoryEventConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList">DataGoogleCloudbuildTriggerRepositoryEventConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.sourceToBuild">sourceToBuild</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList">DataGoogleCloudbuildTriggerSourceToBuildList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.substitutions">substitutions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerTemplate">triggerTemplate</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList">DataGoogleCloudbuildTriggerTriggerTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.webhookConfig">webhookConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList">DataGoogleCloudbuildTriggerWebhookConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerIdInput">triggerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerId">triggerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `approvalConfig`<sup>Required</sup> <a name="approvalConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.approvalConfig"></a>

```typescript
public readonly approvalConfig: DataGoogleCloudbuildTriggerApprovalConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList">DataGoogleCloudbuildTriggerApprovalConfigList</a>

---

##### `bitbucketServerTriggerConfig`<sup>Required</sup> <a name="bitbucketServerTriggerConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.bitbucketServerTriggerConfig"></a>

```typescript
public readonly bitbucketServerTriggerConfig: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList</a>

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: DataGoogleCloudbuildTriggerBuildList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList">DataGoogleCloudbuildTriggerBuildList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `gitFileSource`<sup>Required</sup> <a name="gitFileSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.gitFileSource"></a>

```typescript
public readonly gitFileSource: DataGoogleCloudbuildTriggerGitFileSourceList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList">DataGoogleCloudbuildTriggerGitFileSourceList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.github"></a>

```typescript
public readonly github: DataGoogleCloudbuildTriggerGithubList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList">DataGoogleCloudbuildTriggerGithubList</a>

---

##### `ignoredFiles`<sup>Required</sup> <a name="ignoredFiles" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.ignoredFiles"></a>

```typescript
public readonly ignoredFiles: string[];
```

- *Type:* string[]

---

##### `includeBuildLogs`<sup>Required</sup> <a name="includeBuildLogs" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includeBuildLogs"></a>

```typescript
public readonly includeBuildLogs: string;
```

- *Type:* string

---

##### `includedFiles`<sup>Required</sup> <a name="includedFiles" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.includedFiles"></a>

```typescript
public readonly includedFiles: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pubsubConfig`<sup>Required</sup> <a name="pubsubConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.pubsubConfig"></a>

```typescript
public readonly pubsubConfig: DataGoogleCloudbuildTriggerPubsubConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList">DataGoogleCloudbuildTriggerPubsubConfigList</a>

---

##### `repositoryEventConfig`<sup>Required</sup> <a name="repositoryEventConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.repositoryEventConfig"></a>

```typescript
public readonly repositoryEventConfig: DataGoogleCloudbuildTriggerRepositoryEventConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList">DataGoogleCloudbuildTriggerRepositoryEventConfigList</a>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `sourceToBuild`<sup>Required</sup> <a name="sourceToBuild" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.sourceToBuild"></a>

```typescript
public readonly sourceToBuild: DataGoogleCloudbuildTriggerSourceToBuildList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList">DataGoogleCloudbuildTriggerSourceToBuildList</a>

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.substitutions"></a>

```typescript
public readonly substitutions: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `triggerTemplate`<sup>Required</sup> <a name="triggerTemplate" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerTemplate"></a>

```typescript
public readonly triggerTemplate: DataGoogleCloudbuildTriggerTriggerTemplateList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList">DataGoogleCloudbuildTriggerTriggerTemplateList</a>

---

##### `webhookConfig`<sup>Required</sup> <a name="webhookConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.webhookConfig"></a>

```typescript
public readonly webhookConfig: DataGoogleCloudbuildTriggerWebhookConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList">DataGoogleCloudbuildTriggerWebhookConfigList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `triggerIdInput`<sup>Optional</sup> <a name="triggerIdInput" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerIdInput"></a>

```typescript
public readonly triggerIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudbuildTriggerApprovalConfig <a name="DataGoogleCloudbuildTriggerApprovalConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerApprovalConfig: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig = { ... }
```


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBitbucketServerTriggerConfig: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig = { ... }
```


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest = { ... }
```


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush = { ... }
```


### DataGoogleCloudbuildTriggerBuild <a name="DataGoogleCloudbuildTriggerBuild" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuild: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild = { ... }
```


### DataGoogleCloudbuildTriggerBuildArtifacts <a name="DataGoogleCloudbuildTriggerBuildArtifacts" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildArtifacts: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts = { ... }
```


### DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts <a name="DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts = { ... }
```


### DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages <a name="DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildArtifactsNpmPackages: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages = { ... }
```


### DataGoogleCloudbuildTriggerBuildArtifactsObjects <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjects" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildArtifactsObjects: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects = { ... }
```


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming = { ... }
```


### DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages <a name="DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildArtifactsPythonPackages: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages = { ... }
```


### DataGoogleCloudbuildTriggerBuildAvailableSecrets <a name="DataGoogleCloudbuildTriggerBuildAvailableSecrets" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildAvailableSecrets: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets = { ... }
```


### DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager = { ... }
```


### DataGoogleCloudbuildTriggerBuildOptions <a name="DataGoogleCloudbuildTriggerBuildOptions" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildOptions: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions = { ... }
```


### DataGoogleCloudbuildTriggerBuildOptionsVolumes <a name="DataGoogleCloudbuildTriggerBuildOptionsVolumes" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildOptionsVolumes: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes = { ... }
```


### DataGoogleCloudbuildTriggerBuildSecret <a name="DataGoogleCloudbuildTriggerBuildSecret" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildSecret: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret = { ... }
```


### DataGoogleCloudbuildTriggerBuildSource <a name="DataGoogleCloudbuildTriggerBuildSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildSource: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource = { ... }
```


### DataGoogleCloudbuildTriggerBuildSourceRepoSource <a name="DataGoogleCloudbuildTriggerBuildSourceRepoSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildSourceRepoSource: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource = { ... }
```


### DataGoogleCloudbuildTriggerBuildSourceStorageSource <a name="DataGoogleCloudbuildTriggerBuildSourceStorageSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildSourceStorageSource: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource = { ... }
```


### DataGoogleCloudbuildTriggerBuildStep <a name="DataGoogleCloudbuildTriggerBuildStep" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildStep: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep = { ... }
```


### DataGoogleCloudbuildTriggerBuildStepVolumes <a name="DataGoogleCloudbuildTriggerBuildStepVolumes" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerBuildStepVolumes: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes = { ... }
```


### DataGoogleCloudbuildTriggerConfig <a name="DataGoogleCloudbuildTriggerConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerConfig: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.location">location</a></code> | <code>string</code> | The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.triggerId">triggerId</a></code> | <code>string</code> | The unique identifier for the trigger. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/cloudbuild_trigger#id DataGoogleCloudbuildTrigger#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/cloudbuild_trigger#project DataGoogleCloudbuildTrigger#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/cloudbuild_trigger#location DataGoogleCloudbuildTrigger#location}

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

The unique identifier for the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/cloudbuild_trigger#trigger_id DataGoogleCloudbuildTrigger#trigger_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/cloudbuild_trigger#id DataGoogleCloudbuildTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/cloudbuild_trigger#project DataGoogleCloudbuildTrigger#project}.

---

### DataGoogleCloudbuildTriggerGitFileSource <a name="DataGoogleCloudbuildTriggerGitFileSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerGitFileSource: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource = { ... }
```


### DataGoogleCloudbuildTriggerGithub <a name="DataGoogleCloudbuildTriggerGithub" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerGithub: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub = { ... }
```


### DataGoogleCloudbuildTriggerGithubPullRequest <a name="DataGoogleCloudbuildTriggerGithubPullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerGithubPullRequest: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest = { ... }
```


### DataGoogleCloudbuildTriggerGithubPush <a name="DataGoogleCloudbuildTriggerGithubPush" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerGithubPush: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush = { ... }
```


### DataGoogleCloudbuildTriggerPubsubConfig <a name="DataGoogleCloudbuildTriggerPubsubConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerPubsubConfig: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig = { ... }
```


### DataGoogleCloudbuildTriggerRepositoryEventConfig <a name="DataGoogleCloudbuildTriggerRepositoryEventConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerRepositoryEventConfig: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig = { ... }
```


### DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest = { ... }
```


### DataGoogleCloudbuildTriggerRepositoryEventConfigPush <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPush" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerRepositoryEventConfigPush: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush = { ... }
```


### DataGoogleCloudbuildTriggerSourceToBuild <a name="DataGoogleCloudbuildTriggerSourceToBuild" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerSourceToBuild: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild = { ... }
```


### DataGoogleCloudbuildTriggerTriggerTemplate <a name="DataGoogleCloudbuildTriggerTriggerTemplate" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerTriggerTemplate: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate = { ... }
```


### DataGoogleCloudbuildTriggerWebhookConfig <a name="DataGoogleCloudbuildTriggerWebhookConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

const dataGoogleCloudbuildTriggerWebhookConfig: dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudbuildTriggerApprovalConfigList <a name="DataGoogleCloudbuildTriggerApprovalConfigList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerApprovalConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerApprovalConfigOutputReference <a name="DataGoogleCloudbuildTriggerApprovalConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired">approvalRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig">DataGoogleCloudbuildTriggerApprovalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalRequired`<sup>Required</sup> <a name="approvalRequired" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.approvalRequired"></a>

```typescript
public readonly approvalRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerApprovalConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerApprovalConfig">DataGoogleCloudbuildTriggerApprovalConfig</a>

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource">bitbucketServerConfigResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug">repoSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bitbucketServerConfigResource`<sup>Required</sup> <a name="bitbucketServerConfigResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.bitbucketServerConfigResource"></a>

```typescript
public readonly bitbucketServerConfigResource: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.pullRequest"></a>

```typescript
public readonly pullRequest: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.push"></a>

```typescript
public readonly push: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList</a>

---

##### `repoSlug`<sup>Required</sup> <a name="repoSlug" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.repoSlug"></a>

```typescript
public readonly repoSlug: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfig</a>

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl">commentControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex">invertRegex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commentControl`<sup>Required</sup> <a name="commentControl" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.commentControl"></a>

```typescript
public readonly commentControl: string;
```

- *Type:* string

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.invertRegex"></a>

```typescript
public readonly invertRegex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest</a>

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference <a name="DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex">invertRegex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.invertRegex"></a>

```typescript
public readonly invertRegex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush">DataGoogleCloudbuildTriggerBitbucketServerTriggerConfigPush</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsList <a name="DataGoogleCloudbuildTriggerBuildArtifactsList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList <a name="DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifacts</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList <a name="DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath">packagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packagePath`<sup>Required</sup> <a name="packagePath" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.packagePath"></a>

```typescript
public readonly packagePath: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackages</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsList <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths">paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing">timing</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects">DataGoogleCloudbuildTriggerBuildArtifactsObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

---

##### `timing`<sup>Required</sup> <a name="timing" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.timing"></a>

```typescript
public readonly timing: DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildArtifactsObjects;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjects">DataGoogleCloudbuildTriggerBuildArtifactsObjects</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming">DataGoogleCloudbuildTriggerBuildArtifactsObjectsTiming</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.images">images</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts">mavenArtifacts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages">npmPackages</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.objects">objects</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages">pythonPackages</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts">DataGoogleCloudbuildTriggerBuildArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.images"></a>

```typescript
public readonly images: string[];
```

- *Type:* string[]

---

##### `mavenArtifacts`<sup>Required</sup> <a name="mavenArtifacts" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.mavenArtifacts"></a>

```typescript
public readonly mavenArtifacts: DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList</a>

---

##### `npmPackages`<sup>Required</sup> <a name="npmPackages" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.npmPackages"></a>

```typescript
public readonly npmPackages: DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsNpmPackagesList</a>

---

##### `objects`<sup>Required</sup> <a name="objects" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.objects"></a>

```typescript
public readonly objects: DataGoogleCloudbuildTriggerBuildArtifactsObjectsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsObjectsList">DataGoogleCloudbuildTriggerBuildArtifactsObjectsList</a>

---

##### `pythonPackages`<sup>Required</sup> <a name="pythonPackages" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.pythonPackages"></a>

```typescript
public readonly pythonPackages: DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildArtifacts;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifacts">DataGoogleCloudbuildTriggerBuildArtifacts</a>

---


### DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList <a name="DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference <a name="DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths">paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages">DataGoogleCloudbuildTriggerBuildArtifactsPythonPackages</a>

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsList <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager">secretManager</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets">DataGoogleCloudbuildTriggerBuildAvailableSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretManager`<sup>Required</sup> <a name="secretManager" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.secretManager"></a>

```typescript
public readonly secretManager: DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildAvailableSecrets;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecrets">DataGoogleCloudbuildTriggerBuildAvailableSecrets</a>

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference <a name="DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env">env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager">DataGoogleCloudbuildTriggerBuildAvailableSecretsSecretManager</a>

---


### DataGoogleCloudbuildTriggerBuildList <a name="DataGoogleCloudbuildTriggerBuildList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildOptionsList <a name="DataGoogleCloudbuildTriggerBuildOptionsList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildOptionsOutputReference <a name="DataGoogleCloudbuildTriggerBuildOptionsOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions">dynamicSubstitutions</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.env">env</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logging">logging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption">logStreamingOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption">requestedVerifyOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.secretEnv">secretEnv</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash">sourceProvenanceHash</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption">substitutionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList">DataGoogleCloudbuildTriggerBuildOptionsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.workerPool">workerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions">DataGoogleCloudbuildTriggerBuildOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `dynamicSubstitutions`<sup>Required</sup> <a name="dynamicSubstitutions" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.dynamicSubstitutions"></a>

```typescript
public readonly dynamicSubstitutions: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.env"></a>

```typescript
public readonly env: string[];
```

- *Type:* string[]

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logging"></a>

```typescript
public readonly logging: string;
```

- *Type:* string

---

##### `logStreamingOption`<sup>Required</sup> <a name="logStreamingOption" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.logStreamingOption"></a>

```typescript
public readonly logStreamingOption: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `requestedVerifyOption`<sup>Required</sup> <a name="requestedVerifyOption" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.requestedVerifyOption"></a>

```typescript
public readonly requestedVerifyOption: string;
```

- *Type:* string

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.secretEnv"></a>

```typescript
public readonly secretEnv: string[];
```

- *Type:* string[]

---

##### `sourceProvenanceHash`<sup>Required</sup> <a name="sourceProvenanceHash" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.sourceProvenanceHash"></a>

```typescript
public readonly sourceProvenanceHash: string[];
```

- *Type:* string[]

---

##### `substitutionOption`<sup>Required</sup> <a name="substitutionOption" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.substitutionOption"></a>

```typescript
public readonly substitutionOption: string;
```

- *Type:* string

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.volumes"></a>

```typescript
public readonly volumes: DataGoogleCloudbuildTriggerBuildOptionsVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList">DataGoogleCloudbuildTriggerBuildOptionsVolumesList</a>

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildOptions;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptions">DataGoogleCloudbuildTriggerBuildOptions</a>

---


### DataGoogleCloudbuildTriggerBuildOptionsVolumesList <a name="DataGoogleCloudbuildTriggerBuildOptionsVolumesList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference <a name="DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes">DataGoogleCloudbuildTriggerBuildOptionsVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildOptionsVolumes;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsVolumes">DataGoogleCloudbuildTriggerBuildOptionsVolumes</a>

---


### DataGoogleCloudbuildTriggerBuildOutputReference <a name="DataGoogleCloudbuildTriggerBuildOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.availableSecrets">availableSecrets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList">DataGoogleCloudbuildTriggerBuildAvailableSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.images">images</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.logsBucket">logsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.options">options</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList">DataGoogleCloudbuildTriggerBuildOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.queueTtl">queueTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList">DataGoogleCloudbuildTriggerBuildSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList">DataGoogleCloudbuildTriggerBuildSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.step">step</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList">DataGoogleCloudbuildTriggerBuildStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.substitutions">substitutions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild">DataGoogleCloudbuildTriggerBuild</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.artifacts"></a>

```typescript
public readonly artifacts: DataGoogleCloudbuildTriggerBuildArtifactsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildArtifactsList">DataGoogleCloudbuildTriggerBuildArtifactsList</a>

---

##### `availableSecrets`<sup>Required</sup> <a name="availableSecrets" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.availableSecrets"></a>

```typescript
public readonly availableSecrets: DataGoogleCloudbuildTriggerBuildAvailableSecretsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildAvailableSecretsList">DataGoogleCloudbuildTriggerBuildAvailableSecretsList</a>

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.images"></a>

```typescript
public readonly images: string[];
```

- *Type:* string[]

---

##### `logsBucket`<sup>Required</sup> <a name="logsBucket" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.logsBucket"></a>

```typescript
public readonly logsBucket: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.options"></a>

```typescript
public readonly options: DataGoogleCloudbuildTriggerBuildOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOptionsList">DataGoogleCloudbuildTriggerBuildOptionsList</a>

---

##### `queueTtl`<sup>Required</sup> <a name="queueTtl" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.queueTtl"></a>

```typescript
public readonly queueTtl: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.secret"></a>

```typescript
public readonly secret: DataGoogleCloudbuildTriggerBuildSecretList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList">DataGoogleCloudbuildTriggerBuildSecretList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.source"></a>

```typescript
public readonly source: DataGoogleCloudbuildTriggerBuildSourceList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList">DataGoogleCloudbuildTriggerBuildSourceList</a>

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.step"></a>

```typescript
public readonly step: DataGoogleCloudbuildTriggerBuildStepList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList">DataGoogleCloudbuildTriggerBuildStepList</a>

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.substitutions"></a>

```typescript
public readonly substitutions: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuild;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuild">DataGoogleCloudbuildTriggerBuild</a>

---


### DataGoogleCloudbuildTriggerBuildSecretList <a name="DataGoogleCloudbuildTriggerBuildSecretList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildSecretOutputReference <a name="DataGoogleCloudbuildTriggerBuildSecretOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.secretEnv">secretEnv</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret">DataGoogleCloudbuildTriggerBuildSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.secretEnv"></a>

```typescript
public readonly secretEnv: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildSecret;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSecret">DataGoogleCloudbuildTriggerBuildSecret</a>

---


### DataGoogleCloudbuildTriggerBuildSourceList <a name="DataGoogleCloudbuildTriggerBuildSourceList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildSourceOutputReference <a name="DataGoogleCloudbuildTriggerBuildSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.repoSource">repoSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList">DataGoogleCloudbuildTriggerBuildSourceRepoSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.storageSource">storageSource</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList">DataGoogleCloudbuildTriggerBuildSourceStorageSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource">DataGoogleCloudbuildTriggerBuildSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repoSource`<sup>Required</sup> <a name="repoSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.repoSource"></a>

```typescript
public readonly repoSource: DataGoogleCloudbuildTriggerBuildSourceRepoSourceList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList">DataGoogleCloudbuildTriggerBuildSourceRepoSourceList</a>

---

##### `storageSource`<sup>Required</sup> <a name="storageSource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.storageSource"></a>

```typescript
public readonly storageSource: DataGoogleCloudbuildTriggerBuildSourceStorageSourceList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList">DataGoogleCloudbuildTriggerBuildSourceStorageSourceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildSource;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSource">DataGoogleCloudbuildTriggerBuildSource</a>

---


### DataGoogleCloudbuildTriggerBuildSourceRepoSourceList <a name="DataGoogleCloudbuildTriggerBuildSourceRepoSourceList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference <a name="DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha">commitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir">dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex">invertRegex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName">repoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions">substitutions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource">DataGoogleCloudbuildTriggerBuildSourceRepoSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.invertRegex"></a>

```typescript
public readonly invertRegex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

---

##### `substitutions`<sup>Required</sup> <a name="substitutions" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.substitutions"></a>

```typescript
public readonly substitutions: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildSourceRepoSource;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceRepoSource">DataGoogleCloudbuildTriggerBuildSourceRepoSource</a>

---


### DataGoogleCloudbuildTriggerBuildSourceStorageSourceList <a name="DataGoogleCloudbuildTriggerBuildSourceStorageSourceList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference <a name="DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource">DataGoogleCloudbuildTriggerBuildSourceStorageSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildSourceStorageSource;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildSourceStorageSource">DataGoogleCloudbuildTriggerBuildSourceStorageSource</a>

---


### DataGoogleCloudbuildTriggerBuildStepList <a name="DataGoogleCloudbuildTriggerBuildStepList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildStepOutputReference <a name="DataGoogleCloudbuildTriggerBuildStepOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowExitCodes">allowExitCodes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowFailure">allowFailure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.dir">dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.env">env</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.secretEnv">secretEnv</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timing">timing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList">DataGoogleCloudbuildTriggerBuildStepVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.waitFor">waitFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep">DataGoogleCloudbuildTriggerBuildStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowExitCodes`<sup>Required</sup> <a name="allowExitCodes" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowExitCodes"></a>

```typescript
public readonly allowExitCodes: number[];
```

- *Type:* number[]

---

##### `allowFailure`<sup>Required</sup> <a name="allowFailure" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.allowFailure"></a>

```typescript
public readonly allowFailure: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.env"></a>

```typescript
public readonly env: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.secretEnv"></a>

```typescript
public readonly secretEnv: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `timing`<sup>Required</sup> <a name="timing" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.timing"></a>

```typescript
public readonly timing: string;
```

- *Type:* string

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.volumes"></a>

```typescript
public readonly volumes: DataGoogleCloudbuildTriggerBuildStepVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList">DataGoogleCloudbuildTriggerBuildStepVolumesList</a>

---

##### `waitFor`<sup>Required</sup> <a name="waitFor" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.waitFor"></a>

```typescript
public readonly waitFor: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildStep;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStep">DataGoogleCloudbuildTriggerBuildStep</a>

---


### DataGoogleCloudbuildTriggerBuildStepVolumesList <a name="DataGoogleCloudbuildTriggerBuildStepVolumesList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference <a name="DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes">DataGoogleCloudbuildTriggerBuildStepVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerBuildStepVolumes;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerBuildStepVolumes">DataGoogleCloudbuildTriggerBuildStepVolumes</a>

---


### DataGoogleCloudbuildTriggerGitFileSourceList <a name="DataGoogleCloudbuildTriggerGitFileSourceList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerGitFileSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerGitFileSourceOutputReference <a name="DataGoogleCloudbuildTriggerGitFileSourceOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig">bitbucketServerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repoType">repoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource">DataGoogleCloudbuildTriggerGitFileSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bitbucketServerConfig`<sup>Required</sup> <a name="bitbucketServerConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.bitbucketServerConfig"></a>

```typescript
public readonly bitbucketServerConfig: string;
```

- *Type:* string

---

##### `githubEnterpriseConfig`<sup>Required</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.githubEnterpriseConfig"></a>

```typescript
public readonly githubEnterpriseConfig: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `repoType`<sup>Required</sup> <a name="repoType" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.repoType"></a>

```typescript
public readonly repoType: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerGitFileSource;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGitFileSource">DataGoogleCloudbuildTriggerGitFileSource</a>

---


### DataGoogleCloudbuildTriggerGithubList <a name="DataGoogleCloudbuildTriggerGithubList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerGithubOutputReference <a name="DataGoogleCloudbuildTriggerGithubOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName">enterpriseConfigResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList">DataGoogleCloudbuildTriggerGithubPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList">DataGoogleCloudbuildTriggerGithubPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub">DataGoogleCloudbuildTriggerGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enterpriseConfigResourceName`<sup>Required</sup> <a name="enterpriseConfigResourceName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.enterpriseConfigResourceName"></a>

```typescript
public readonly enterpriseConfigResourceName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.pullRequest"></a>

```typescript
public readonly pullRequest: DataGoogleCloudbuildTriggerGithubPullRequestList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList">DataGoogleCloudbuildTriggerGithubPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.push"></a>

```typescript
public readonly push: DataGoogleCloudbuildTriggerGithubPushList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList">DataGoogleCloudbuildTriggerGithubPushList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerGithub;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithub">DataGoogleCloudbuildTriggerGithub</a>

---


### DataGoogleCloudbuildTriggerGithubPullRequestList <a name="DataGoogleCloudbuildTriggerGithubPullRequestList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerGithubPullRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerGithubPullRequestOutputReference <a name="DataGoogleCloudbuildTriggerGithubPullRequestOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.commentControl">commentControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex">invertRegex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest">DataGoogleCloudbuildTriggerGithubPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commentControl`<sup>Required</sup> <a name="commentControl" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.commentControl"></a>

```typescript
public readonly commentControl: string;
```

- *Type:* string

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.invertRegex"></a>

```typescript
public readonly invertRegex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerGithubPullRequest;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPullRequest">DataGoogleCloudbuildTriggerGithubPullRequest</a>

---


### DataGoogleCloudbuildTriggerGithubPushList <a name="DataGoogleCloudbuildTriggerGithubPushList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerGithubPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerGithubPushOutputReference <a name="DataGoogleCloudbuildTriggerGithubPushOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.invertRegex">invertRegex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush">DataGoogleCloudbuildTriggerGithubPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.invertRegex"></a>

```typescript
public readonly invertRegex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPushOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerGithubPush;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerGithubPush">DataGoogleCloudbuildTriggerGithubPush</a>

---


### DataGoogleCloudbuildTriggerPubsubConfigList <a name="DataGoogleCloudbuildTriggerPubsubConfigList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerPubsubConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerPubsubConfigOutputReference <a name="DataGoogleCloudbuildTriggerPubsubConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.subscription">subscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig">DataGoogleCloudbuildTriggerPubsubConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.subscription"></a>

```typescript
public readonly subscription: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerPubsubConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerPubsubConfig">DataGoogleCloudbuildTriggerPubsubConfig</a>

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigList <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest">pullRequest</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.push">push</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList">DataGoogleCloudbuildTriggerRepositoryEventConfigPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig">DataGoogleCloudbuildTriggerRepositoryEventConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pullRequest`<sup>Required</sup> <a name="pullRequest" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.pullRequest"></a>

```typescript
public readonly pullRequest: DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList</a>

---

##### `push`<sup>Required</sup> <a name="push" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.push"></a>

```typescript
public readonly push: DataGoogleCloudbuildTriggerRepositoryEventConfigPushList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList">DataGoogleCloudbuildTriggerRepositoryEventConfigPushList</a>

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerRepositoryEventConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfig">DataGoogleCloudbuildTriggerRepositoryEventConfig</a>

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl">commentControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex">invertRegex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commentControl`<sup>Required</sup> <a name="commentControl" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.commentControl"></a>

```typescript
public readonly commentControl: string;
```

- *Type:* string

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.invertRegex"></a>

```typescript
public readonly invertRegex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest">DataGoogleCloudbuildTriggerRepositoryEventConfigPullRequest</a>

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPushList <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPushList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference <a name="DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex">invertRegex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush">DataGoogleCloudbuildTriggerRepositoryEventConfigPush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.invertRegex"></a>

```typescript
public readonly invertRegex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerRepositoryEventConfigPush;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerRepositoryEventConfigPush">DataGoogleCloudbuildTriggerRepositoryEventConfigPush</a>

---


### DataGoogleCloudbuildTriggerSourceToBuildList <a name="DataGoogleCloudbuildTriggerSourceToBuildList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerSourceToBuildOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerSourceToBuildOutputReference <a name="DataGoogleCloudbuildTriggerSourceToBuildOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig">bitbucketServerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig">githubEnterpriseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repoType">repoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild">DataGoogleCloudbuildTriggerSourceToBuild</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bitbucketServerConfig`<sup>Required</sup> <a name="bitbucketServerConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.bitbucketServerConfig"></a>

```typescript
public readonly bitbucketServerConfig: string;
```

- *Type:* string

---

##### `githubEnterpriseConfig`<sup>Required</sup> <a name="githubEnterpriseConfig" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.githubEnterpriseConfig"></a>

```typescript
public readonly githubEnterpriseConfig: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `repoType`<sup>Required</sup> <a name="repoType" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.repoType"></a>

```typescript
public readonly repoType: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuildOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerSourceToBuild;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerSourceToBuild">DataGoogleCloudbuildTriggerSourceToBuild</a>

---


### DataGoogleCloudbuildTriggerTriggerTemplateList <a name="DataGoogleCloudbuildTriggerTriggerTemplateList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerTriggerTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerTriggerTemplateOutputReference <a name="DataGoogleCloudbuildTriggerTriggerTemplateOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.commitSha">commitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.dir">dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex">invertRegex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.repoName">repoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate">DataGoogleCloudbuildTriggerTriggerTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.invertRegex"></a>

```typescript
public readonly invertRegex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerTriggerTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerTriggerTemplate">DataGoogleCloudbuildTriggerTriggerTemplate</a>

---


### DataGoogleCloudbuildTriggerWebhookConfigList <a name="DataGoogleCloudbuildTriggerWebhookConfigList" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.get"></a>

```typescript
public get(index: number): DataGoogleCloudbuildTriggerWebhookConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudbuildTriggerWebhookConfigOutputReference <a name="DataGoogleCloudbuildTriggerWebhookConfigOutputReference" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudbuildTrigger } from '@cdktf/provider-google'

new dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig">DataGoogleCloudbuildTriggerWebhookConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudbuildTriggerWebhookConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudbuildTrigger.DataGoogleCloudbuildTriggerWebhookConfig">DataGoogleCloudbuildTriggerWebhookConfig</a>

---



