# `apihubPlugin` Submodule <a name="`apihubPlugin` Submodule" id="@cdktf/provider-google.apihubPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubPlugin <a name="ApihubPlugin" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin google_apihub_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPlugin(scope: Construct, id: string, config: ApihubPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig">ApihubPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig">ApihubPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putActionsConfig">putActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putConfigTemplate">putConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putDocumentation">putDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putHostingService">putHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetActionsConfig">resetActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetConfigTemplate">resetConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDocumentation">resetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetHostingService">resetHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetPluginCategory">resetPluginCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionsConfig` <a name="putActionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putActionsConfig"></a>

```typescript
public putActionsConfig(value: IResolvable | ApihubPluginActionsConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putActionsConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>[]

---

##### `putConfigTemplate` <a name="putConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putConfigTemplate"></a>

```typescript
public putConfigTemplate(value: ApihubPluginConfigTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putConfigTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

---

##### `putDocumentation` <a name="putDocumentation" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putDocumentation"></a>

```typescript
public putDocumentation(value: ApihubPluginDocumentation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putDocumentation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

---

##### `putHostingService` <a name="putHostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putHostingService"></a>

```typescript
public putHostingService(value: ApihubPluginHostingService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putHostingService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putTimeouts"></a>

```typescript
public putTimeouts(value: ApihubPluginTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>

---

##### `resetActionsConfig` <a name="resetActionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetActionsConfig"></a>

```typescript
public resetActionsConfig(): void
```

##### `resetConfigTemplate` <a name="resetConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetConfigTemplate"></a>

```typescript
public resetConfigTemplate(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentation` <a name="resetDocumentation" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDocumentation"></a>

```typescript
public resetDocumentation(): void
```

##### `resetHostingService` <a name="resetHostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetHostingService"></a>

```typescript
public resetHostingService(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPluginCategory` <a name="resetPluginCategory" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetPluginCategory"></a>

```typescript
public resetPluginCategory(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApihubPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isConstruct"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

apihubPlugin.ApihubPlugin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformElement"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

apihubPlugin.ApihubPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformResource"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

apihubPlugin.ApihubPlugin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

apihubPlugin.ApihubPlugin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApihubPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApihubPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApihubPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApihubPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfig">actionsConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList">ApihubPluginActionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplate">configTemplate</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference">ApihubPluginConfigTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference">ApihubPluginDocumentationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingService">hostingService</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference">ApihubPluginHostingServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.ownershipType">ownershipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference">ApihubPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfigInput">actionsConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplateInput">configTemplateInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentationInput">documentationInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingServiceInput">hostingServiceInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategoryInput">pluginCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginIdInput">pluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategory">pluginCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionsConfig`<sup>Required</sup> <a name="actionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfig"></a>

```typescript
public readonly actionsConfig: ApihubPluginActionsConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList">ApihubPluginActionsConfigList</a>

---

##### `configTemplate`<sup>Required</sup> <a name="configTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplate"></a>

```typescript
public readonly configTemplate: ApihubPluginConfigTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference">ApihubPluginConfigTemplateOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentation"></a>

```typescript
public readonly documentation: ApihubPluginDocumentationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference">ApihubPluginDocumentationOutputReference</a>

---

##### `hostingService`<sup>Required</sup> <a name="hostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingService"></a>

```typescript
public readonly hostingService: ApihubPluginHostingServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference">ApihubPluginHostingServiceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownershipType`<sup>Required</sup> <a name="ownershipType" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.ownershipType"></a>

```typescript
public readonly ownershipType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeouts"></a>

```typescript
public readonly timeouts: ApihubPluginTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference">ApihubPluginTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionsConfigInput`<sup>Optional</sup> <a name="actionsConfigInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfigInput"></a>

```typescript
public readonly actionsConfigInput: IResolvable | ApihubPluginActionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>[]

---

##### `configTemplateInput`<sup>Optional</sup> <a name="configTemplateInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplateInput"></a>

```typescript
public readonly configTemplateInput: ApihubPluginConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `documentationInput`<sup>Optional</sup> <a name="documentationInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentationInput"></a>

```typescript
public readonly documentationInput: ApihubPluginDocumentation;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

---

##### `hostingServiceInput`<sup>Optional</sup> <a name="hostingServiceInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingServiceInput"></a>

```typescript
public readonly hostingServiceInput: ApihubPluginHostingService;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `pluginCategoryInput`<sup>Optional</sup> <a name="pluginCategoryInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategoryInput"></a>

```typescript
public readonly pluginCategoryInput: string;
```

- *Type:* string

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginIdInput"></a>

```typescript
public readonly pluginIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApihubPluginTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `pluginCategory`<sup>Required</sup> <a name="pluginCategory" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategory"></a>

```typescript
public readonly pluginCategory: string;
```

- *Type:* string

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubPluginActionsConfig <a name="ApihubPluginActionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginActionsConfig: apihubPlugin.ApihubPluginActionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.description">description</a></code> | <code>string</code> | The description of the operation performed by the action. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the action. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.id">id</a></code> | <code>string</code> | The id of the action. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.triggerMode">triggerMode</a></code> | <code>string</code> | The trigger mode supported by the action. Possible values: TRIGGER_MODE_UNSPECIFIED API_HUB_ON_DEMAND_TRIGGER API_HUB_SCHEDULE_TRIGGER NON_API_HUB_MANAGED. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the operation performed by the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `triggerMode`<sup>Required</sup> <a name="triggerMode" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.triggerMode"></a>

```typescript
public readonly triggerMode: string;
```

- *Type:* string

The trigger mode supported by the action. Possible values: TRIGGER_MODE_UNSPECIFIED API_HUB_ON_DEMAND_TRIGGER API_HUB_SCHEDULE_TRIGGER NON_API_HUB_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#trigger_mode ApihubPlugin#trigger_mode}

---

### ApihubPluginConfig <a name="ApihubPluginConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginConfig: apihubPlugin.ApihubPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the plugin. Max length is 50 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginId">pluginId</a></code> | <code>string</code> | The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.actionsConfig">actionsConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>[]</code> | actions_config block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.configTemplate">configTemplate</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a></code> | config_template block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.description">description</a></code> | <code>string</code> | The plugin description. Max length is 2000 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.hostingService">hostingService</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a></code> | hosting_service block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginCategory">pluginCategory</a></code> | <code>string</code> | Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#project ApihubPlugin#project}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the plugin. Max length is 50 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#location ApihubPlugin#location}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
the specified id is already used by another Plugin resource in the API hub
instance.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, overall resource name which will be
of format
'projects/{project}/locations/{location}/plugins/{plugin}',
its length is limited to 1000 characters and valid characters are
/a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#plugin_id ApihubPlugin#plugin_id}

---

##### `actionsConfig`<sup>Optional</sup> <a name="actionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.actionsConfig"></a>

```typescript
public readonly actionsConfig: IResolvable | ApihubPluginActionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>[]

actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#actions_config ApihubPlugin#actions_config}

---

##### `configTemplate`<sup>Optional</sup> <a name="configTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.configTemplate"></a>

```typescript
public readonly configTemplate: ApihubPluginConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#config_template ApihubPlugin#config_template}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The plugin description. Max length is 2000 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.documentation"></a>

```typescript
public readonly documentation: ApihubPluginDocumentation;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#documentation ApihubPlugin#documentation}

---

##### `hostingService`<sup>Optional</sup> <a name="hostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.hostingService"></a>

```typescript
public readonly hostingService: ApihubPluginHostingService;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

hosting_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#hosting_service ApihubPlugin#hosting_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pluginCategory`<sup>Optional</sup> <a name="pluginCategory" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginCategory"></a>

```typescript
public readonly pluginCategory: string;
```

- *Type:* string

Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#plugin_category ApihubPlugin#plugin_category}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#project ApihubPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApihubPluginTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#timeouts ApihubPlugin#timeouts}

---

### ApihubPluginConfigTemplate <a name="ApihubPluginConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginConfigTemplate: apihubPlugin.ApihubPluginConfigTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.additionalConfigTemplate">additionalConfigTemplate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]</code> | additional_config_template block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.authConfigTemplate">authConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a></code> | auth_config_template block. |

---

##### `additionalConfigTemplate`<sup>Optional</sup> <a name="additionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.additionalConfigTemplate"></a>

```typescript
public readonly additionalConfigTemplate: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]

additional_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#additional_config_template ApihubPlugin#additional_config_template}

---

##### `authConfigTemplate`<sup>Optional</sup> <a name="authConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.authConfigTemplate"></a>

```typescript
public readonly authConfigTemplate: ApihubPluginConfigTemplateAuthConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

auth_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#auth_config_template ApihubPlugin#auth_config_template}

---

### ApihubPluginConfigTemplateAdditionalConfigTemplate <a name="ApihubPluginConfigTemplateAdditionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginConfigTemplateAdditionalConfigTemplate: apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.id">id</a></code> | <code>string</code> | ID of the config variable. Must be unique within the configuration. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.valueType">valueType</a></code> | <code>string</code> | Type of the parameter: string, int, bool etc. Possible values: VALUE_TYPE_UNSPECIFIED STRING INT BOOL SECRET ENUM MULTI_SELECT MULTI_STRING MULTI_INT. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.description">description</a></code> | <code>string</code> | Description. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.enumOptions">enumOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]</code> | enum_options block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.multiSelectOptions">multiSelectOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]</code> | multi_select_options block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag represents that this 'ConfigVariable' must be provided for a PluginInstance. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.validationRegex">validationRegex</a></code> | <code>string</code> | Regular expression in RE2 syntax used for validating the 'value' of a 'ConfigVariable'. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the config variable. Must be unique within the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Type of the parameter: string, int, bool etc. Possible values: VALUE_TYPE_UNSPECIFIED STRING INT BOOL SECRET ENUM MULTI_SELECT MULTI_STRING MULTI_INT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#value_type ApihubPlugin#value_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

##### `enumOptions`<sup>Optional</sup> <a name="enumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.enumOptions"></a>

```typescript
public readonly enumOptions: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]

enum_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#enum_options ApihubPlugin#enum_options}

---

##### `multiSelectOptions`<sup>Optional</sup> <a name="multiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.multiSelectOptions"></a>

```typescript
public readonly multiSelectOptions: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]

multi_select_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#multi_select_options ApihubPlugin#multi_select_options}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag represents that this 'ConfigVariable' must be provided for a PluginInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#required ApihubPlugin#required}

---

##### `validationRegex`<sup>Optional</sup> <a name="validationRegex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.validationRegex"></a>

```typescript
public readonly validationRegex: string;
```

- *Type:* string

Regular expression in RE2 syntax used for validating the 'value' of a 'ConfigVariable'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#validation_regex ApihubPlugin#validation_regex}

---

### ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions: apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.displayName">displayName</a></code> | <code>string</code> | Display name of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.id">id</a></code> | <code>string</code> | Id of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.description">description</a></code> | <code>string</code> | Description of the option. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Id of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

### ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions: apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.displayName">displayName</a></code> | <code>string</code> | Display name of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.id">id</a></code> | <code>string</code> | Id of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.description">description</a></code> | <code>string</code> | Description of the option. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Id of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

### ApihubPluginConfigTemplateAuthConfigTemplate <a name="ApihubPluginConfigTemplateAuthConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginConfigTemplateAuthConfigTemplate: apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.supportedAuthTypes">supportedAuthTypes</a></code> | <code>string[]</code> | The list of authentication types supported by the plugin. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | service_account block. |

---

##### `supportedAuthTypes`<sup>Required</sup> <a name="supportedAuthTypes" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.supportedAuthTypes"></a>

```typescript
public readonly supportedAuthTypes: string[];
```

- *Type:* string[]

The list of authentication types supported by the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#supported_auth_types ApihubPlugin#supported_auth_types}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#service_account ApihubPlugin#service_account}

---

### ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount <a name="ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginConfigTemplateAuthConfigTemplateServiceAccount: apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The service account to be used for authenticating request. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#service_account ApihubPlugin#service_account}

---

### ApihubPluginDocumentation <a name="ApihubPluginDocumentation" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginDocumentation: apihubPlugin.ApihubPluginDocumentation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation.property.externalUri">externalUri</a></code> | <code>string</code> | The uri of the externally hosted documentation. |

---

##### `externalUri`<sup>Optional</sup> <a name="externalUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation.property.externalUri"></a>

```typescript
public readonly externalUri: string;
```

- *Type:* string

The uri of the externally hosted documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#external_uri ApihubPlugin#external_uri}

---

### ApihubPluginHostingService <a name="ApihubPluginHostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginHostingService: apihubPlugin.ApihubPluginHostingService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService.property.serviceUri">serviceUri</a></code> | <code>string</code> | The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality. |

---

##### `serviceUri`<sup>Optional</sup> <a name="serviceUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality.

This information is only required for
user defined plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#service_uri ApihubPlugin#service_uri}

---

### ApihubPluginTimeouts <a name="ApihubPluginTimeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

const apihubPluginTimeouts: apihubPlugin.ApihubPluginTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#create ApihubPlugin#create}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#delete ApihubPlugin#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#create ApihubPlugin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#delete ApihubPlugin#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubPluginActionsConfigList <a name="ApihubPluginActionsConfigList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginActionsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.get"></a>

```typescript
public get(index: number): ApihubPluginActionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginActionsConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>[]

---


### ApihubPluginActionsConfigOutputReference <a name="ApihubPluginActionsConfigOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginActionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerModeInput">triggerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerMode">triggerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `triggerModeInput`<sup>Optional</sup> <a name="triggerModeInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerModeInput"></a>

```typescript
public readonly triggerModeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `triggerMode`<sup>Required</sup> <a name="triggerMode" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerMode"></a>

```typescript
public readonly triggerMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginActionsConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig">ApihubPluginActionsConfig</a>

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get"></a>

```typescript
public get(index: number): ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateList <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.get"></a>

```typescript
public get(index: number): ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get"></a>

```typescript
public get(index: number): ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions">putEnumOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions">putMultiSelectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetEnumOptions">resetEnumOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetMultiSelectOptions">resetMultiSelectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetValidationRegex">resetValidationRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnumOptions` <a name="putEnumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions"></a>

```typescript
public putEnumOptions(value: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]

---

##### `putMultiSelectOptions` <a name="putMultiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions"></a>

```typescript
public putMultiSelectOptions(value: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnumOptions` <a name="resetEnumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetEnumOptions"></a>

```typescript
public resetEnumOptions(): void
```

##### `resetMultiSelectOptions` <a name="resetMultiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetMultiSelectOptions"></a>

```typescript
public resetMultiSelectOptions(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetValidationRegex` <a name="resetValidationRegex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetValidationRegex"></a>

```typescript
public resetValidationRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptions">enumOptions</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptions">multiSelectOptions</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptionsInput">enumOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptionsInput">multiSelectOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegexInput">validationRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegex">validationRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enumOptions`<sup>Required</sup> <a name="enumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptions"></a>

```typescript
public readonly enumOptions: ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList</a>

---

##### `multiSelectOptions`<sup>Required</sup> <a name="multiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptions"></a>

```typescript
public readonly multiSelectOptions: ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enumOptionsInput`<sup>Optional</sup> <a name="enumOptionsInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptionsInput"></a>

```typescript
public readonly enumOptionsInput: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `multiSelectOptionsInput`<sup>Optional</sup> <a name="multiSelectOptionsInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptionsInput"></a>

```typescript
public readonly multiSelectOptionsInput: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions</a>[]

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validationRegexInput`<sup>Optional</sup> <a name="validationRegexInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegexInput"></a>

```typescript
public readonly validationRegexInput: string;
```

- *Type:* string

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validationRegex`<sup>Required</sup> <a name="validationRegex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegex"></a>

```typescript
public readonly validationRegex: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>

---


### ApihubPluginConfigTemplateAuthConfigTemplateOutputReference <a name="ApihubPluginConfigTemplateAuthConfigTemplateOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount">putServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount"></a>

```typescript
public putServiceAccount(value: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypesInput">supportedAuthTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypes">supportedAuthTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---

##### `supportedAuthTypesInput`<sup>Optional</sup> <a name="supportedAuthTypesInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypesInput"></a>

```typescript
public readonly supportedAuthTypesInput: string[];
```

- *Type:* string[]

---

##### `supportedAuthTypes`<sup>Required</sup> <a name="supportedAuthTypes" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypes"></a>

```typescript
public readonly supportedAuthTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginConfigTemplateAuthConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

---


### ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference <a name="ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---


### ApihubPluginConfigTemplateOutputReference <a name="ApihubPluginConfigTemplateOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginConfigTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate">putAdditionalConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate">putAuthConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAdditionalConfigTemplate">resetAdditionalConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAuthConfigTemplate">resetAuthConfigTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalConfigTemplate` <a name="putAdditionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate"></a>

```typescript
public putAdditionalConfigTemplate(value: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]

---

##### `putAuthConfigTemplate` <a name="putAuthConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate"></a>

```typescript
public putAuthConfigTemplate(value: ApihubPluginConfigTemplateAuthConfigTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

---

##### `resetAdditionalConfigTemplate` <a name="resetAdditionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAdditionalConfigTemplate"></a>

```typescript
public resetAdditionalConfigTemplate(): void
```

##### `resetAuthConfigTemplate` <a name="resetAuthConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAuthConfigTemplate"></a>

```typescript
public resetAuthConfigTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplate">additionalConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList">ApihubPluginConfigTemplateAdditionalConfigTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplate">authConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplateInput">additionalConfigTemplateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplateInput">authConfigTemplateInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalConfigTemplate`<sup>Required</sup> <a name="additionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplate"></a>

```typescript
public readonly additionalConfigTemplate: ApihubPluginConfigTemplateAdditionalConfigTemplateList;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList">ApihubPluginConfigTemplateAdditionalConfigTemplateList</a>

---

##### `authConfigTemplate`<sup>Required</sup> <a name="authConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplate"></a>

```typescript
public readonly authConfigTemplate: ApihubPluginConfigTemplateAuthConfigTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateOutputReference</a>

---

##### `additionalConfigTemplateInput`<sup>Optional</sup> <a name="additionalConfigTemplateInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplateInput"></a>

```typescript
public readonly additionalConfigTemplateInput: IResolvable | ApihubPluginConfigTemplateAdditionalConfigTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate">ApihubPluginConfigTemplateAdditionalConfigTemplate</a>[]

---

##### `authConfigTemplateInput`<sup>Optional</sup> <a name="authConfigTemplateInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplateInput"></a>

```typescript
public readonly authConfigTemplateInput: ApihubPluginConfigTemplateAuthConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginConfigTemplate;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

---


### ApihubPluginDocumentationOutputReference <a name="ApihubPluginDocumentationOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginDocumentationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resetExternalUri">resetExternalUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalUri` <a name="resetExternalUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resetExternalUri"></a>

```typescript
public resetExternalUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUriInput">externalUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUri">externalUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalUriInput`<sup>Optional</sup> <a name="externalUriInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUriInput"></a>

```typescript
public readonly externalUriInput: string;
```

- *Type:* string

---

##### `externalUri`<sup>Required</sup> <a name="externalUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUri"></a>

```typescript
public readonly externalUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginDocumentation;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

---


### ApihubPluginHostingServiceOutputReference <a name="ApihubPluginHostingServiceOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginHostingServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resetServiceUri">resetServiceUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceUri` <a name="resetServiceUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resetServiceUri"></a>

```typescript
public resetServiceUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUriInput">serviceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUri">serviceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceUriInput`<sup>Optional</sup> <a name="serviceUriInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUriInput"></a>

```typescript
public readonly serviceUriInput: string;
```

- *Type:* string

---

##### `serviceUri`<sup>Required</sup> <a name="serviceUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUri"></a>

```typescript
public readonly serviceUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApihubPluginHostingService;
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

---


### ApihubPluginTimeoutsOutputReference <a name="ApihubPluginTimeoutsOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer"></a>

```typescript
import { apihubPlugin } from '@cdktf/provider-google'

new apihubPlugin.ApihubPluginTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApihubPluginTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>

---



