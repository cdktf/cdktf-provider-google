# `sccProjectNotificationConfig` Submodule <a name="`sccProjectNotificationConfig` Submodule" id="@cdktf/provider-google.sccProjectNotificationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccProjectNotificationConfig <a name="SccProjectNotificationConfig" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config google_scc_project_notification_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.Initializer"></a>

```typescript
import { sccProjectNotificationConfig } from '@cdktf/provider-google'

new sccProjectNotificationConfig.SccProjectNotificationConfig(scope: Construct, id: string, config: SccProjectNotificationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig">SccProjectNotificationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig">SccProjectNotificationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.putStreamingConfig">putStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStreamingConfig` <a name="putStreamingConfig" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.putStreamingConfig"></a>

```typescript
public putStreamingConfig(value: SccProjectNotificationConfigStreamingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.putStreamingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig">SccProjectNotificationConfigStreamingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: SccProjectNotificationConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts">SccProjectNotificationConfigTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccProjectNotificationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.isConstruct"></a>

```typescript
import { sccProjectNotificationConfig } from '@cdktf/provider-google'

sccProjectNotificationConfig.SccProjectNotificationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.isTerraformElement"></a>

```typescript
import { sccProjectNotificationConfig } from '@cdktf/provider-google'

sccProjectNotificationConfig.SccProjectNotificationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.isTerraformResource"></a>

```typescript
import { sccProjectNotificationConfig } from '@cdktf/provider-google'

sccProjectNotificationConfig.SccProjectNotificationConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.generateConfigForImport"></a>

```typescript
import { sccProjectNotificationConfig } from '@cdktf/provider-google'

sccProjectNotificationConfig.SccProjectNotificationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SccProjectNotificationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccProjectNotificationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccProjectNotificationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccProjectNotificationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.streamingConfig">streamingConfig</a></code> | <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference">SccProjectNotificationConfigStreamingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference">SccProjectNotificationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.configIdInput">configIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.streamingConfigInput">streamingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig">SccProjectNotificationConfigStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts">SccProjectNotificationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `streamingConfig`<sup>Required</sup> <a name="streamingConfig" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.streamingConfig"></a>

```typescript
public readonly streamingConfig: SccProjectNotificationConfigStreamingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference">SccProjectNotificationConfigStreamingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccProjectNotificationConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference">SccProjectNotificationConfigTimeoutsOutputReference</a>

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.configIdInput"></a>

```typescript
public readonly configIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `streamingConfigInput`<sup>Optional</sup> <a name="streamingConfigInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.streamingConfigInput"></a>

```typescript
public readonly streamingConfigInput: SccProjectNotificationConfigStreamingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig">SccProjectNotificationConfigStreamingConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SccProjectNotificationConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts">SccProjectNotificationConfigTimeouts</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccProjectNotificationConfigConfig <a name="SccProjectNotificationConfigConfig" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.Initializer"></a>

```typescript
import { sccProjectNotificationConfig } from '@cdktf/provider-google'

const sccProjectNotificationConfigConfig: sccProjectNotificationConfig.SccProjectNotificationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.configId">configId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.streamingConfig">streamingConfig</a></code> | <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig">SccProjectNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.description">description</a></code> | <code>string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#id SccProjectNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#project SccProjectNotificationConfig#project}. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts">SccProjectNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#config_id SccProjectNotificationConfig#config_id}

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#pubsub_topic SccProjectNotificationConfig#pubsub_topic}

---

##### `streamingConfig`<sup>Required</sup> <a name="streamingConfig" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.streamingConfig"></a>

```typescript
public readonly streamingConfig: SccProjectNotificationConfigStreamingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig">SccProjectNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#streaming_config SccProjectNotificationConfig#streaming_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#description SccProjectNotificationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#id SccProjectNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#project SccProjectNotificationConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccProjectNotificationConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts">SccProjectNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#timeouts SccProjectNotificationConfig#timeouts}

---

### SccProjectNotificationConfigStreamingConfig <a name="SccProjectNotificationConfigStreamingConfig" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig.Initializer"></a>

```typescript
import { sccProjectNotificationConfig } from '@cdktf/provider-google'

const sccProjectNotificationConfigStreamingConfig: sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig.property.filter">filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#filter SccProjectNotificationConfig#filter}

---

### SccProjectNotificationConfigTimeouts <a name="SccProjectNotificationConfigTimeouts" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts.Initializer"></a>

```typescript
import { sccProjectNotificationConfig } from '@cdktf/provider-google'

const sccProjectNotificationConfigTimeouts: sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#create SccProjectNotificationConfig#create}. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#delete SccProjectNotificationConfig#delete}. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#update SccProjectNotificationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#create SccProjectNotificationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#delete SccProjectNotificationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/scc_project_notification_config#update SccProjectNotificationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccProjectNotificationConfigStreamingConfigOutputReference <a name="SccProjectNotificationConfigStreamingConfigOutputReference" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.Initializer"></a>

```typescript
import { sccProjectNotificationConfig } from '@cdktf/provider-google'

new sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig">SccProjectNotificationConfigStreamingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccProjectNotificationConfigStreamingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigStreamingConfig">SccProjectNotificationConfigStreamingConfig</a>

---


### SccProjectNotificationConfigTimeoutsOutputReference <a name="SccProjectNotificationConfigTimeoutsOutputReference" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { sccProjectNotificationConfig } from '@cdktf/provider-google'

new sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts">SccProjectNotificationConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccProjectNotificationConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccProjectNotificationConfig.SccProjectNotificationConfigTimeouts">SccProjectNotificationConfigTimeouts</a>

---



