# `dataGoogleComposerUserWorkloadsConfigMap` Submodule <a name="`dataGoogleComposerUserWorkloadsConfigMap` Submodule" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComposerUserWorkloadsConfigMap <a name="DataGoogleComposerUserWorkloadsConfigMap" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/composer_user_workloads_config_map google_composer_user_workloads_config_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer"></a>

```typescript
import { dataGoogleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google'

new dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap(scope: Construct, id: string, config: DataGoogleComposerUserWorkloadsConfigMapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig">DataGoogleComposerUserWorkloadsConfigMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig">DataGoogleComposerUserWorkloadsConfigMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComposerUserWorkloadsConfigMap resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isConstruct"></a>

```typescript
import { dataGoogleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google'

dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformElement"></a>

```typescript
import { dataGoogleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google'

dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformDataSource"></a>

```typescript
import { dataGoogleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google'

dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport"></a>

```typescript
import { dataGoogleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google'

dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComposerUserWorkloadsConfigMap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComposerUserWorkloadsConfigMap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComposerUserWorkloadsConfigMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/composer_user_workloads_config_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComposerUserWorkloadsConfigMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.data">data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.data"></a>

```typescript
public readonly data: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComposerUserWorkloadsConfigMapConfig <a name="DataGoogleComposerUserWorkloadsConfigMapConfig" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.Initializer"></a>

```typescript
import { dataGoogleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google'

const dataGoogleComposerUserWorkloadsConfigMapConfig: dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.environment">environment</a></code> | <code>string</code> | Environment where the Kubernetes ConfigMap will be stored and used. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.name">name</a></code> | <code>string</code> | Name of the Kubernetes ConfigMap. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/composer_user_workloads_config_map#id DataGoogleComposerUserWorkloadsConfigMap#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/composer_user_workloads_config_map#project DataGoogleComposerUserWorkloadsConfigMap#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.region">region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Environment where the Kubernetes ConfigMap will be stored and used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/composer_user_workloads_config_map#environment DataGoogleComposerUserWorkloadsConfigMap#environment}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Kubernetes ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/composer_user_workloads_config_map#name DataGoogleComposerUserWorkloadsConfigMap#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/composer_user_workloads_config_map#id DataGoogleComposerUserWorkloadsConfigMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/composer_user_workloads_config_map#project DataGoogleComposerUserWorkloadsConfigMap#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/composer_user_workloads_config_map#region DataGoogleComposerUserWorkloadsConfigMap#region}

---



