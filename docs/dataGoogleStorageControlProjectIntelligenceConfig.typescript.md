# `dataGoogleStorageControlProjectIntelligenceConfig` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceConfig` Submodule" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceConfig <a name="DataGoogleStorageControlProjectIntelligenceConfig" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_control_project_intelligence_config google_storage_control_project_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig(scope: Construct, id: string, config: DataGoogleStorageControlProjectIntelligenceConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig">DataGoogleStorageControlProjectIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig">DataGoogleStorageControlProjectIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageControlProjectIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isConstruct"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformElement"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformDataSource"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleStorageControlProjectIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageControlProjectIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_control_project_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.editionConfig">editionConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.effectiveIntelligenceConfig">effectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList">DataGoogleStorageControlProjectIntelligenceConfigFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.trialConfig">trialConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList">DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `editionConfig`<sup>Required</sup> <a name="editionConfig" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.editionConfig"></a>

```typescript
public readonly editionConfig: string;
```

- *Type:* string

---

##### `effectiveIntelligenceConfig`<sup>Required</sup> <a name="effectiveIntelligenceConfig" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```typescript
public readonly effectiveIntelligenceConfig: DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.filter"></a>

```typescript
public readonly filter: DataGoogleStorageControlProjectIntelligenceConfigFilterList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList">DataGoogleStorageControlProjectIntelligenceConfigFilterList</a>

---

##### `trialConfig`<sup>Required</sup> <a name="trialConfig" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.trialConfig"></a>

```typescript
public readonly trialConfig: DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList">DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceConfigConfig <a name="DataGoogleStorageControlProjectIntelligenceConfigConfig" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

const dataGoogleStorageControlProjectIntelligenceConfigConfig: dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.name">name</a></code> | <code>string</code> | Identifier of the GCP project. For GCP project, this field can be project name or project number. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_control_project_intelligence_config#id DataGoogleStorageControlProjectIntelligenceConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier of the GCP project. For GCP project, this field can be project name or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_control_project_intelligence_config#name DataGoogleStorageControlProjectIntelligenceConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/storage_control_project_intelligence_config#id DataGoogleStorageControlProjectIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig <a name="DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

const dataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig: dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig = { ... }
```


### DataGoogleStorageControlProjectIntelligenceConfigFilter <a name="DataGoogleStorageControlProjectIntelligenceConfigFilter" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

const dataGoogleStorageControlProjectIntelligenceConfigFilter: dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter = { ... }
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

const dataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets: dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets = { ... }
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

const dataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations: dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations = { ... }
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

const dataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets: dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets = { ... }
```


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

const dataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations: dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations = { ... }
```


### DataGoogleStorageControlProjectIntelligenceConfigTrialConfig <a name="DataGoogleStorageControlProjectIntelligenceConfigTrialConfig" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfig.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

const dataGoogleStorageControlProjectIntelligenceConfigTrialConfig: dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList <a name="DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">effectiveEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">intelligenceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveEdition`<sup>Required</sup> <a name="effectiveEdition" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```typescript
public readonly effectiveEdition: string;
```

- *Type:* string

---

##### `intelligenceConfig`<sup>Required</sup> <a name="intelligenceConfig" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```typescript
public readonly intelligenceConfig: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlProjectIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```typescript
public readonly bucketIdRegexes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterList <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterList" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">excludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">excludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">includedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter">DataGoogleStorageControlProjectIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedCloudStorageBuckets`<sup>Required</sup> <a name="excludedCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```typescript
public readonly excludedCloudStorageBuckets: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageBucketsList</a>

---

##### `excludedCloudStorageLocations`<sup>Required</sup> <a name="excludedCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```typescript
public readonly excludedCloudStorageLocations: DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterExcludedCloudStorageLocationsList</a>

---

##### `includedCloudStorageBuckets`<sup>Required</sup> <a name="includedCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```typescript
public readonly includedCloudStorageBuckets: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageBucketsList</a>

---

##### `includedCloudStorageLocations`<sup>Required</sup> <a name="includedCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```typescript
public readonly includedCloudStorageLocations: DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlProjectIntelligenceConfigFilterIncludedCloudStorageLocationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceConfigFilter;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigFilter">DataGoogleStorageControlProjectIntelligenceConfigFilter</a>

---


### DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList <a name="DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.get"></a>

```typescript
public get(index: number): DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference <a name="DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageControlProjectIntelligenceConfig } from '@cdktf/provider-google'

new dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfig">DataGoogleStorageControlProjectIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageControlProjectIntelligenceConfigTrialConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageControlProjectIntelligenceConfig.DataGoogleStorageControlProjectIntelligenceConfigTrialConfig">DataGoogleStorageControlProjectIntelligenceConfigTrialConfig</a>

---



