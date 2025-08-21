# `monitoringMonitoredProject` Submodule <a name="`monitoringMonitoredProject` Submodule" id="@cdktf/provider-google.monitoringMonitoredProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringMonitoredProject <a name="MonitoringMonitoredProject" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project google_monitoring_monitored_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer"></a>

```typescript
import { monitoringMonitoredProject } from '@cdktf/provider-google'

new monitoringMonitoredProject.MonitoringMonitoredProject(scope: Construct, id: string, config: MonitoringMonitoredProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig">MonitoringMonitoredProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig">MonitoringMonitoredProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitoringMonitoredProjectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringMonitoredProject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isConstruct"></a>

```typescript
import { monitoringMonitoredProject } from '@cdktf/provider-google'

monitoringMonitoredProject.MonitoringMonitoredProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformElement"></a>

```typescript
import { monitoringMonitoredProject } from '@cdktf/provider-google'

monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformResource"></a>

```typescript
import { monitoringMonitoredProject } from '@cdktf/provider-google'

monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.generateConfigForImport"></a>

```typescript
import { monitoringMonitoredProject } from '@cdktf/provider-google'

monitoringMonitoredProject.MonitoringMonitoredProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitoringMonitoredProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringMonitoredProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringMonitoredProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringMonitoredProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference">MonitoringMonitoredProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScopeInput">metricsScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScope">metricsScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringMonitoredProjectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference">MonitoringMonitoredProjectTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricsScopeInput`<sup>Optional</sup> <a name="metricsScopeInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScopeInput"></a>

```typescript
public readonly metricsScopeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitoringMonitoredProjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricsScope`<sup>Required</sup> <a name="metricsScope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.metricsScope"></a>

```typescript
public readonly metricsScope: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringMonitoredProjectConfig <a name="MonitoringMonitoredProjectConfig" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.Initializer"></a>

```typescript
import { monitoringMonitoredProject } from '@cdktf/provider-google'

const monitoringMonitoredProjectConfig: monitoringMonitoredProject.MonitoringMonitoredProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.metricsScope">metricsScope</a></code> | <code>string</code> | Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.name">name</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project#id MonitoringMonitoredProject#id}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metricsScope`<sup>Required</sup> <a name="metricsScope" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.metricsScope"></a>

```typescript
public readonly metricsScope: string;
```

- *Type:* string

Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project#metrics_scope MonitoringMonitoredProject#metrics_scope}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Immutable.

The resource name of the 'MonitoredProject'. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: 'locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project#name MonitoringMonitoredProject#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project#id MonitoringMonitoredProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringMonitoredProjectTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project#timeouts MonitoringMonitoredProject#timeouts}

---

### MonitoringMonitoredProjectTimeouts <a name="MonitoringMonitoredProjectTimeouts" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.Initializer"></a>

```typescript
import { monitoringMonitoredProject } from '@cdktf/provider-google'

const monitoringMonitoredProjectTimeouts: monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project#create MonitoringMonitoredProject#create}. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project#delete MonitoringMonitoredProject#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project#create MonitoringMonitoredProject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/monitoring_monitored_project#delete MonitoringMonitoredProject#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringMonitoredProjectTimeoutsOutputReference <a name="MonitoringMonitoredProjectTimeoutsOutputReference" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitoringMonitoredProject } from '@cdktf/provider-google'

new monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringMonitoredProjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringMonitoredProject.MonitoringMonitoredProjectTimeouts">MonitoringMonitoredProjectTimeouts</a>

---



