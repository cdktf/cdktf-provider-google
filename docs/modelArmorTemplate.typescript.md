# `modelArmorTemplate` Submodule <a name="`modelArmorTemplate` Submodule" id="@cdktf/provider-google.modelArmorTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelArmorTemplate <a name="ModelArmorTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template google_model_armor_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplate(scope: Construct, id: string, config: ModelArmorTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig">ModelArmorTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig">ModelArmorTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig">putFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata">putTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTemplateMetadata">resetTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilterConfig` <a name="putFilterConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig"></a>

```typescript
public putFilterConfig(value: ModelArmorTemplateFilterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

---

##### `putTemplateMetadata` <a name="putTemplateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata"></a>

```typescript
public putTemplateMetadata(value: ModelArmorTemplateTemplateMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: ModelArmorTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTemplateMetadata` <a name="resetTemplateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTemplateMetadata"></a>

```typescript
public resetTemplateMetadata(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ModelArmorTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isConstruct"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

modelArmorTemplate.ModelArmorTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformElement"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

modelArmorTemplate.ModelArmorTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformResource"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

modelArmorTemplate.ModelArmorTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

modelArmorTemplate.ModelArmorTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ModelArmorTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ModelArmorTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ModelArmorTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ModelArmorTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfig">filterConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference">ModelArmorTemplateFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadata">templateMetadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference">ModelArmorTemplateTemplateMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference">ModelArmorTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfigInput">filterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateIdInput">templateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadataInput">templateMetadataInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `filterConfig`<sup>Required</sup> <a name="filterConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfig"></a>

```typescript
public readonly filterConfig: ModelArmorTemplateFilterConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference">ModelArmorTemplateFilterConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `templateMetadata`<sup>Required</sup> <a name="templateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadata"></a>

```typescript
public readonly templateMetadata: ModelArmorTemplateTemplateMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference">ModelArmorTemplateTemplateMetadataOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: ModelArmorTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference">ModelArmorTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `filterConfigInput`<sup>Optional</sup> <a name="filterConfigInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfigInput"></a>

```typescript
public readonly filterConfigInput: ModelArmorTemplateFilterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* string

---

##### `templateMetadataInput`<sup>Optional</sup> <a name="templateMetadataInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadataInput"></a>

```typescript
public readonly templateMetadataInput: ModelArmorTemplateTemplateMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ModelArmorTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ModelArmorTemplateConfig <a name="ModelArmorTemplateConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateConfig: modelArmorTemplate.ModelArmorTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.filterConfig">filterConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateId">templateId</a></code> | <code>string</code> | Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#id ModelArmorTemplate#id}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#project ModelArmorTemplate#project}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateMetadata">templateMetadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a></code> | template_metadata block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filterConfig`<sup>Required</sup> <a name="filterConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.filterConfig"></a>

```typescript
public readonly filterConfig: ModelArmorTemplateFilterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#filter_config ModelArmorTemplate#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#location ModelArmorTemplate#location}

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#template_id ModelArmorTemplate#template_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#id ModelArmorTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#labels ModelArmorTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#project ModelArmorTemplate#project}.

---

##### `templateMetadata`<sup>Optional</sup> <a name="templateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateMetadata"></a>

```typescript
public readonly templateMetadata: ModelArmorTemplateTemplateMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

template_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#template_metadata ModelArmorTemplate#template_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ModelArmorTemplateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#timeouts ModelArmorTemplate#timeouts}

---

### ModelArmorTemplateFilterConfig <a name="ModelArmorTemplateFilterConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateFilterConfig: modelArmorTemplate.ModelArmorTemplateFilterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.maliciousUriFilterSettings">maliciousUriFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.piAndJailbreakFilterSettings">piAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.raiSettings">raiSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.sdpSettings">sdpSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `maliciousUriFilterSettings`<sup>Optional</sup> <a name="maliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.maliciousUriFilterSettings"></a>

```typescript
public readonly maliciousUriFilterSettings: ModelArmorTemplateFilterConfigMaliciousUriFilterSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#malicious_uri_filter_settings ModelArmorTemplate#malicious_uri_filter_settings}

---

##### `piAndJailbreakFilterSettings`<sup>Optional</sup> <a name="piAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.piAndJailbreakFilterSettings"></a>

```typescript
public readonly piAndJailbreakFilterSettings: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#pi_and_jailbreak_filter_settings ModelArmorTemplate#pi_and_jailbreak_filter_settings}

---

##### `raiSettings`<sup>Optional</sup> <a name="raiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.raiSettings"></a>

```typescript
public readonly raiSettings: ModelArmorTemplateFilterConfigRaiSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#rai_settings ModelArmorTemplate#rai_settings}

---

##### `sdpSettings`<sup>Optional</sup> <a name="sdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.sdpSettings"></a>

```typescript
public readonly sdpSettings: ModelArmorTemplateFilterConfigSdpSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#sdp_settings ModelArmorTemplate#sdp_settings}

---

### ModelArmorTemplateFilterConfigMaliciousUriFilterSettings <a name="ModelArmorTemplateFilterConfigMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateFilterConfigMaliciousUriFilterSettings: modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">filterEnforcement</a></code> | <code>string</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filterEnforcement`<sup>Optional</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```typescript
public readonly filterEnforcement: string;
```

- *Type:* string

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

### ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings <a name="ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateFilterConfigPiAndJailbreakFilterSettings: modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">confidenceLevel</a></code> | <code>string</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">filterEnforcement</a></code> | <code>string</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `confidenceLevel`<sup>Optional</sup> <a name="confidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```typescript
public readonly confidenceLevel: string;
```

- *Type:* string

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#confidence_level ModelArmorTemplate#confidence_level}

---

##### `filterEnforcement`<sup>Optional</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```typescript
public readonly filterEnforcement: string;
```

- *Type:* string

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

### ModelArmorTemplateFilterConfigRaiSettings <a name="ModelArmorTemplateFilterConfigRaiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateFilterConfigRaiSettings: modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings.property.raiFilters">raiFilters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]</code> | rai_filters block. |

---

##### `raiFilters`<sup>Required</sup> <a name="raiFilters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings.property.raiFilters"></a>

```typescript
public readonly raiFilters: IResolvable | ModelArmorTemplateFilterConfigRaiSettingsRaiFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#rai_filters ModelArmorTemplate#rai_filters}

---

### ModelArmorTemplateFilterConfigRaiSettingsRaiFilters <a name="ModelArmorTemplateFilterConfigRaiSettingsRaiFilters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateFilterConfigRaiSettingsRaiFilters: modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.filterType">filterType</a></code> | <code>string</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">confidenceLevel</a></code> | <code>string</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#filter_type ModelArmorTemplate#filter_type}

---

##### `confidenceLevel`<sup>Optional</sup> <a name="confidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```typescript
public readonly confidenceLevel: string;
```

- *Type:* string

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#confidence_level ModelArmorTemplate#confidence_level}

---

### ModelArmorTemplateFilterConfigSdpSettings <a name="ModelArmorTemplateFilterConfigSdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateFilterConfigSdpSettings: modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.advancedConfig">advancedConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.basicConfig">basicConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `advancedConfig`<sup>Optional</sup> <a name="advancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.advancedConfig"></a>

```typescript
public readonly advancedConfig: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#advanced_config ModelArmorTemplate#advanced_config}

---

##### `basicConfig`<sup>Optional</sup> <a name="basicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.basicConfig"></a>

```typescript
public readonly basicConfig: ModelArmorTemplateFilterConfigSdpSettingsBasicConfig;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#basic_config ModelArmorTemplate#basic_config}

---

### ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig <a name="ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateFilterConfigSdpSettingsAdvancedConfig: modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>string</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">inspectTemplate</a></code> | <code>string</code> | Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization. |

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

```typescript
public readonly deidentifyTemplate: string;
```

- *Type:* string

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.
e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#deidentify_template ModelArmorTemplate#deidentify_template}

---

##### `inspectTemplate`<sup>Optional</sup> <a name="inspectTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```typescript
public readonly inspectTemplate: string;
```

- *Type:* string

Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization.

All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.
e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#inspect_template ModelArmorTemplate#inspect_template}

---

### ModelArmorTemplateFilterConfigSdpSettingsBasicConfig <a name="ModelArmorTemplateFilterConfigSdpSettingsBasicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateFilterConfigSdpSettingsBasicConfig: modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">filterEnforcement</a></code> | <code>string</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filterEnforcement`<sup>Optional</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```typescript
public readonly filterEnforcement: string;
```

- *Type:* string

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

### ModelArmorTemplateTemplateMetadata <a name="ModelArmorTemplateTemplateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateTemplateMetadata: modelArmorTemplate.ModelArmorTemplateTemplateMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorCode">customLlmResponseSafetyErrorCode</a></code> | <code>number</code> | Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorMessage">customLlmResponseSafetyErrorMessage</a></code> | <code>string</code> | Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorCode">customPromptSafetyErrorCode</a></code> | <code>number</code> | Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorMessage">customPromptSafetyErrorMessage</a></code> | <code>string</code> | Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.enforcementType">enforcementType</a></code> | <code>string</code> | Possible values: INSPECT_ONLY INSPECT_AND_BLOCK. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.ignorePartialInvocationFailures">ignorePartialInvocationFailures</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, partial detector failures should be ignored. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logSanitizeOperations">logSanitizeOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, log sanitize operations. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logTemplateOperations">logTemplateOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, log template crud operations. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.multiLanguageDetection">multiLanguageDetection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `customLlmResponseSafetyErrorCode`<sup>Optional</sup> <a name="customLlmResponseSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorCode"></a>

```typescript
public readonly customLlmResponseSafetyErrorCode: number;
```

- *Type:* number

Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#custom_llm_response_safety_error_code ModelArmorTemplate#custom_llm_response_safety_error_code}

---

##### `customLlmResponseSafetyErrorMessage`<sup>Optional</sup> <a name="customLlmResponseSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorMessage"></a>

```typescript
public readonly customLlmResponseSafetyErrorMessage: string;
```

- *Type:* string

Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#custom_llm_response_safety_error_message ModelArmorTemplate#custom_llm_response_safety_error_message}

---

##### `customPromptSafetyErrorCode`<sup>Optional</sup> <a name="customPromptSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorCode"></a>

```typescript
public readonly customPromptSafetyErrorCode: number;
```

- *Type:* number

Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#custom_prompt_safety_error_code ModelArmorTemplate#custom_prompt_safety_error_code}

---

##### `customPromptSafetyErrorMessage`<sup>Optional</sup> <a name="customPromptSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorMessage"></a>

```typescript
public readonly customPromptSafetyErrorMessage: string;
```

- *Type:* string

Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#custom_prompt_safety_error_message ModelArmorTemplate#custom_prompt_safety_error_message}

---

##### `enforcementType`<sup>Optional</sup> <a name="enforcementType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.enforcementType"></a>

```typescript
public readonly enforcementType: string;
```

- *Type:* string

Possible values: INSPECT_ONLY INSPECT_AND_BLOCK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#enforcement_type ModelArmorTemplate#enforcement_type}

---

##### `ignorePartialInvocationFailures`<sup>Optional</sup> <a name="ignorePartialInvocationFailures" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.ignorePartialInvocationFailures"></a>

```typescript
public readonly ignorePartialInvocationFailures: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, partial detector failures should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#ignore_partial_invocation_failures ModelArmorTemplate#ignore_partial_invocation_failures}

---

##### `logSanitizeOperations`<sup>Optional</sup> <a name="logSanitizeOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logSanitizeOperations"></a>

```typescript
public readonly logSanitizeOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, log sanitize operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#log_sanitize_operations ModelArmorTemplate#log_sanitize_operations}

---

##### `logTemplateOperations`<sup>Optional</sup> <a name="logTemplateOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logTemplateOperations"></a>

```typescript
public readonly logTemplateOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, log template crud operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#log_template_operations ModelArmorTemplate#log_template_operations}

---

##### `multiLanguageDetection`<sup>Optional</sup> <a name="multiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.multiLanguageDetection"></a>

```typescript
public readonly multiLanguageDetection: ModelArmorTemplateTemplateMetadataMultiLanguageDetection;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#multi_language_detection ModelArmorTemplate#multi_language_detection}

---

### ModelArmorTemplateTemplateMetadataMultiLanguageDetection <a name="ModelArmorTemplateTemplateMetadataMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateTemplateMetadataMultiLanguageDetection: modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">enableMultiLanguageDetection</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, multi language detection will be enabled. |

---

##### `enableMultiLanguageDetection`<sup>Required</sup> <a name="enableMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```typescript
public readonly enableMultiLanguageDetection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#enable_multi_language_detection ModelArmorTemplate#enable_multi_language_detection}

---

### ModelArmorTemplateTimeouts <a name="ModelArmorTemplateTimeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

const modelArmorTemplateTimeouts: modelArmorTemplate.ModelArmorTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#create ModelArmorTemplate#create}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#delete ModelArmorTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#update ModelArmorTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#create ModelArmorTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#delete ModelArmorTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#update ModelArmorTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference <a name="ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">resetFilterEnforcement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterEnforcement` <a name="resetFilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```typescript
public resetFilterEnforcement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">filterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">filterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterEnforcementInput`<sup>Optional</sup> <a name="filterEnforcementInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```typescript
public readonly filterEnforcementInput: string;
```

- *Type:* string

---

##### `filterEnforcement`<sup>Required</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```typescript
public readonly filterEnforcement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelArmorTemplateFilterConfigMaliciousUriFilterSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---


### ModelArmorTemplateFilterConfigOutputReference <a name="ModelArmorTemplateFilterConfigOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings">putMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings">putPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putRaiSettings">putRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putSdpSettings">putSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetMaliciousUriFilterSettings">resetMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">resetPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetRaiSettings">resetRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetSdpSettings">resetSdpSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaliciousUriFilterSettings` <a name="putMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```typescript
public putMaliciousUriFilterSettings(value: ModelArmorTemplateFilterConfigMaliciousUriFilterSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---

##### `putPiAndJailbreakFilterSettings` <a name="putPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```typescript
public putPiAndJailbreakFilterSettings(value: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `putRaiSettings` <a name="putRaiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putRaiSettings"></a>

```typescript
public putRaiSettings(value: ModelArmorTemplateFilterConfigRaiSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putRaiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

---

##### `putSdpSettings` <a name="putSdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putSdpSettings"></a>

```typescript
public putSdpSettings(value: ModelArmorTemplateFilterConfigSdpSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putSdpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

---

##### `resetMaliciousUriFilterSettings` <a name="resetMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```typescript
public resetMaliciousUriFilterSettings(): void
```

##### `resetPiAndJailbreakFilterSettings` <a name="resetPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```typescript
public resetPiAndJailbreakFilterSettings(): void
```

##### `resetRaiSettings` <a name="resetRaiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetRaiSettings"></a>

```typescript
public resetRaiSettings(): void
```

##### `resetSdpSettings` <a name="resetSdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetSdpSettings"></a>

```typescript
public resetSdpSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettings">maliciousUriFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettings">piAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettings">raiSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference">ModelArmorTemplateFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettings">sdpSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference">ModelArmorTemplateFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">maliciousUriFilterSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">piAndJailbreakFilterSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettingsInput">raiSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettingsInput">sdpSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maliciousUriFilterSettings`<sup>Required</sup> <a name="maliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```typescript
public readonly maliciousUriFilterSettings: ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `piAndJailbreakFilterSettings`<sup>Required</sup> <a name="piAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```typescript
public readonly piAndJailbreakFilterSettings: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `raiSettings`<sup>Required</sup> <a name="raiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettings"></a>

```typescript
public readonly raiSettings: ModelArmorTemplateFilterConfigRaiSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference">ModelArmorTemplateFilterConfigRaiSettingsOutputReference</a>

---

##### `sdpSettings`<sup>Required</sup> <a name="sdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettings"></a>

```typescript
public readonly sdpSettings: ModelArmorTemplateFilterConfigSdpSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference">ModelArmorTemplateFilterConfigSdpSettingsOutputReference</a>

---

##### `maliciousUriFilterSettingsInput`<sup>Optional</sup> <a name="maliciousUriFilterSettingsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```typescript
public readonly maliciousUriFilterSettingsInput: ModelArmorTemplateFilterConfigMaliciousUriFilterSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---

##### `piAndJailbreakFilterSettingsInput`<sup>Optional</sup> <a name="piAndJailbreakFilterSettingsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```typescript
public readonly piAndJailbreakFilterSettingsInput: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `raiSettingsInput`<sup>Optional</sup> <a name="raiSettingsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettingsInput"></a>

```typescript
public readonly raiSettingsInput: ModelArmorTemplateFilterConfigRaiSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

---

##### `sdpSettingsInput`<sup>Optional</sup> <a name="sdpSettingsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettingsInput"></a>

```typescript
public readonly sdpSettingsInput: ModelArmorTemplateFilterConfigSdpSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelArmorTemplateFilterConfig;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

---


### ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">resetConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">resetFilterEnforcement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidenceLevel` <a name="resetConfidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```typescript
public resetConfidenceLevel(): void
```

##### `resetFilterEnforcement` <a name="resetFilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```typescript
public resetFilterEnforcement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">confidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">filterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">confidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">filterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidenceLevelInput`<sup>Optional</sup> <a name="confidenceLevelInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```typescript
public readonly confidenceLevelInput: string;
```

- *Type:* string

---

##### `filterEnforcementInput`<sup>Optional</sup> <a name="filterEnforcementInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```typescript
public readonly filterEnforcementInput: string;
```

- *Type:* string

---

##### `confidenceLevel`<sup>Required</sup> <a name="confidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```typescript
public readonly confidenceLevel: string;
```

- *Type:* string

---

##### `filterEnforcement`<sup>Required</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```typescript
public readonly filterEnforcement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---


### ModelArmorTemplateFilterConfigRaiSettingsOutputReference <a name="ModelArmorTemplateFilterConfigRaiSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters">putRaiFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRaiFilters` <a name="putRaiFilters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```typescript
public putRaiFilters(value: IResolvable | ModelArmorTemplateFilterConfigRaiSettingsRaiFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFilters">raiFilters</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList">ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">raiFiltersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `raiFilters`<sup>Required</sup> <a name="raiFilters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```typescript
public readonly raiFilters: ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList">ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `raiFiltersInput`<sup>Optional</sup> <a name="raiFiltersInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```typescript
public readonly raiFiltersInput: IResolvable | ModelArmorTemplateFilterConfigRaiSettingsRaiFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelArmorTemplateFilterConfigRaiSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

---


### ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList <a name="ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get"></a>

```typescript
public get(index: number): ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelArmorTemplateFilterConfigRaiSettingsRaiFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>[]

---


### ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference <a name="ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">resetConfidenceLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidenceLevel` <a name="resetConfidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```typescript
public resetConfidenceLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">confidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">confidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidenceLevelInput`<sup>Optional</sup> <a name="confidenceLevelInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```typescript
public readonly confidenceLevelInput: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `confidenceLevel`<sup>Required</sup> <a name="confidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```typescript
public readonly confidenceLevel: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelArmorTemplateFilterConfigRaiSettingsRaiFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters">ModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>

---


### ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">resetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">resetInspectTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeidentifyTemplate` <a name="resetDeidentifyTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```typescript
public resetDeidentifyTemplate(): void
```

##### `resetInspectTemplate` <a name="resetInspectTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```typescript
public resetInspectTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">deidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">inspectTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">inspectTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deidentifyTemplateInput`<sup>Optional</sup> <a name="deidentifyTemplateInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```typescript
public readonly deidentifyTemplateInput: string;
```

- *Type:* string

---

##### `inspectTemplateInput`<sup>Optional</sup> <a name="inspectTemplateInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```typescript
public readonly inspectTemplateInput: string;
```

- *Type:* string

---

##### `deidentifyTemplate`<sup>Required</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```typescript
public readonly deidentifyTemplate: string;
```

- *Type:* string

---

##### `inspectTemplate`<sup>Required</sup> <a name="inspectTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```typescript
public readonly inspectTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---


### ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference <a name="ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">resetFilterEnforcement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterEnforcement` <a name="resetFilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```typescript
public resetFilterEnforcement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">filterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">filterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterEnforcementInput`<sup>Optional</sup> <a name="filterEnforcementInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```typescript
public readonly filterEnforcementInput: string;
```

- *Type:* string

---

##### `filterEnforcement`<sup>Required</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```typescript
public readonly filterEnforcement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelArmorTemplateFilterConfigSdpSettingsBasicConfig;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---


### ModelArmorTemplateFilterConfigSdpSettingsOutputReference <a name="ModelArmorTemplateFilterConfigSdpSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig">putAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig">putBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">resetAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetBasicConfig">resetBasicConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedConfig` <a name="putAdvancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```typescript
public putAdvancedConfig(value: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `putBasicConfig` <a name="putBasicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```typescript
public putBasicConfig(value: ModelArmorTemplateFilterConfigSdpSettingsBasicConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---

##### `resetAdvancedConfig` <a name="resetAdvancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```typescript
public resetAdvancedConfig(): void
```

##### `resetBasicConfig` <a name="resetBasicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```typescript
public resetBasicConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfig">advancedConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfig">basicConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">advancedConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfigInput">basicConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedConfig`<sup>Required</sup> <a name="advancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```typescript
public readonly advancedConfig: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `basicConfig`<sup>Required</sup> <a name="basicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```typescript
public readonly basicConfig: ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `advancedConfigInput`<sup>Optional</sup> <a name="advancedConfigInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```typescript
public readonly advancedConfigInput: ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `basicConfigInput`<sup>Optional</sup> <a name="basicConfigInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```typescript
public readonly basicConfigInput: ModelArmorTemplateFilterConfigSdpSettingsBasicConfig;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelArmorTemplateFilterConfigSdpSettings;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

---


### ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference <a name="ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">enableMultiLanguageDetectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">enableMultiLanguageDetection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableMultiLanguageDetectionInput`<sup>Optional</sup> <a name="enableMultiLanguageDetectionInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```typescript
public readonly enableMultiLanguageDetectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableMultiLanguageDetection`<sup>Required</sup> <a name="enableMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```typescript
public readonly enableMultiLanguageDetection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelArmorTemplateTemplateMetadataMultiLanguageDetection;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---


### ModelArmorTemplateTemplateMetadataOutputReference <a name="ModelArmorTemplateTemplateMetadataOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection">putMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorCode">resetCustomLlmResponseSafetyErrorCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorMessage">resetCustomLlmResponseSafetyErrorMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorCode">resetCustomPromptSafetyErrorCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorMessage">resetCustomPromptSafetyErrorMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetEnforcementType">resetEnforcementType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetIgnorePartialInvocationFailures">resetIgnorePartialInvocationFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogSanitizeOperations">resetLogSanitizeOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogTemplateOperations">resetLogTemplateOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetMultiLanguageDetection">resetMultiLanguageDetection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiLanguageDetection` <a name="putMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection"></a>

```typescript
public putMultiLanguageDetection(value: ModelArmorTemplateTemplateMetadataMultiLanguageDetection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---

##### `resetCustomLlmResponseSafetyErrorCode` <a name="resetCustomLlmResponseSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorCode"></a>

```typescript
public resetCustomLlmResponseSafetyErrorCode(): void
```

##### `resetCustomLlmResponseSafetyErrorMessage` <a name="resetCustomLlmResponseSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorMessage"></a>

```typescript
public resetCustomLlmResponseSafetyErrorMessage(): void
```

##### `resetCustomPromptSafetyErrorCode` <a name="resetCustomPromptSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorCode"></a>

```typescript
public resetCustomPromptSafetyErrorCode(): void
```

##### `resetCustomPromptSafetyErrorMessage` <a name="resetCustomPromptSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorMessage"></a>

```typescript
public resetCustomPromptSafetyErrorMessage(): void
```

##### `resetEnforcementType` <a name="resetEnforcementType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetEnforcementType"></a>

```typescript
public resetEnforcementType(): void
```

##### `resetIgnorePartialInvocationFailures` <a name="resetIgnorePartialInvocationFailures" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetIgnorePartialInvocationFailures"></a>

```typescript
public resetIgnorePartialInvocationFailures(): void
```

##### `resetLogSanitizeOperations` <a name="resetLogSanitizeOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogSanitizeOperations"></a>

```typescript
public resetLogSanitizeOperations(): void
```

##### `resetLogTemplateOperations` <a name="resetLogTemplateOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogTemplateOperations"></a>

```typescript
public resetLogTemplateOperations(): void
```

##### `resetMultiLanguageDetection` <a name="resetMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetMultiLanguageDetection"></a>

```typescript
public resetMultiLanguageDetection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetection">multiLanguageDetection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference">ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCodeInput">customLlmResponseSafetyErrorCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessageInput">customLlmResponseSafetyErrorMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCodeInput">customPromptSafetyErrorCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessageInput">customPromptSafetyErrorMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementTypeInput">enforcementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailuresInput">ignorePartialInvocationFailuresInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperationsInput">logSanitizeOperationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperationsInput">logTemplateOperationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetectionInput">multiLanguageDetectionInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCode">customLlmResponseSafetyErrorCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessage">customLlmResponseSafetyErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCode">customPromptSafetyErrorCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessage">customPromptSafetyErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementType">enforcementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailures">ignorePartialInvocationFailures</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperations">logSanitizeOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperations">logTemplateOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiLanguageDetection`<sup>Required</sup> <a name="multiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetection"></a>

```typescript
public readonly multiLanguageDetection: ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference">ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference</a>

---

##### `customLlmResponseSafetyErrorCodeInput`<sup>Optional</sup> <a name="customLlmResponseSafetyErrorCodeInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCodeInput"></a>

```typescript
public readonly customLlmResponseSafetyErrorCodeInput: number;
```

- *Type:* number

---

##### `customLlmResponseSafetyErrorMessageInput`<sup>Optional</sup> <a name="customLlmResponseSafetyErrorMessageInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessageInput"></a>

```typescript
public readonly customLlmResponseSafetyErrorMessageInput: string;
```

- *Type:* string

---

##### `customPromptSafetyErrorCodeInput`<sup>Optional</sup> <a name="customPromptSafetyErrorCodeInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCodeInput"></a>

```typescript
public readonly customPromptSafetyErrorCodeInput: number;
```

- *Type:* number

---

##### `customPromptSafetyErrorMessageInput`<sup>Optional</sup> <a name="customPromptSafetyErrorMessageInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessageInput"></a>

```typescript
public readonly customPromptSafetyErrorMessageInput: string;
```

- *Type:* string

---

##### `enforcementTypeInput`<sup>Optional</sup> <a name="enforcementTypeInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementTypeInput"></a>

```typescript
public readonly enforcementTypeInput: string;
```

- *Type:* string

---

##### `ignorePartialInvocationFailuresInput`<sup>Optional</sup> <a name="ignorePartialInvocationFailuresInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailuresInput"></a>

```typescript
public readonly ignorePartialInvocationFailuresInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logSanitizeOperationsInput`<sup>Optional</sup> <a name="logSanitizeOperationsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperationsInput"></a>

```typescript
public readonly logSanitizeOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logTemplateOperationsInput`<sup>Optional</sup> <a name="logTemplateOperationsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperationsInput"></a>

```typescript
public readonly logTemplateOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multiLanguageDetectionInput`<sup>Optional</sup> <a name="multiLanguageDetectionInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```typescript
public readonly multiLanguageDetectionInput: ModelArmorTemplateTemplateMetadataMultiLanguageDetection;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---

##### `customLlmResponseSafetyErrorCode`<sup>Required</sup> <a name="customLlmResponseSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCode"></a>

```typescript
public readonly customLlmResponseSafetyErrorCode: number;
```

- *Type:* number

---

##### `customLlmResponseSafetyErrorMessage`<sup>Required</sup> <a name="customLlmResponseSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessage"></a>

```typescript
public readonly customLlmResponseSafetyErrorMessage: string;
```

- *Type:* string

---

##### `customPromptSafetyErrorCode`<sup>Required</sup> <a name="customPromptSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCode"></a>

```typescript
public readonly customPromptSafetyErrorCode: number;
```

- *Type:* number

---

##### `customPromptSafetyErrorMessage`<sup>Required</sup> <a name="customPromptSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessage"></a>

```typescript
public readonly customPromptSafetyErrorMessage: string;
```

- *Type:* string

---

##### `enforcementType`<sup>Required</sup> <a name="enforcementType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementType"></a>

```typescript
public readonly enforcementType: string;
```

- *Type:* string

---

##### `ignorePartialInvocationFailures`<sup>Required</sup> <a name="ignorePartialInvocationFailures" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailures"></a>

```typescript
public readonly ignorePartialInvocationFailures: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logSanitizeOperations`<sup>Required</sup> <a name="logSanitizeOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperations"></a>

```typescript
public readonly logSanitizeOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logTemplateOperations`<sup>Required</sup> <a name="logTemplateOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperations"></a>

```typescript
public readonly logTemplateOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ModelArmorTemplateTemplateMetadata;
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

---


### ModelArmorTemplateTimeoutsOutputReference <a name="ModelArmorTemplateTimeoutsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { modelArmorTemplate } from '@cdktf/provider-google'

new modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ModelArmorTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>

---



