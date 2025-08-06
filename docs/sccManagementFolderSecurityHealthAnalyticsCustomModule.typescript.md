# `sccManagementFolderSecurityHealthAnalyticsCustomModule` Submodule <a name="`sccManagementFolderSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccManagementFolderSecurityHealthAnalyticsCustomModule <a name="SccManagementFolderSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module google_scc_management_folder_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

new sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule(scope: Construct, id: string, config: SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig">putCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetCustomConfig">resetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetEnablementState">resetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomConfig` <a name="putCustomConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```typescript
public putCustomConfig(value: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```typescript
public putTimeouts(value: SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `resetCustomConfig` <a name="resetCustomConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```typescript
public resetCustomConfig(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnablementState` <a name="resetEnablementState" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```typescript
public resetEnablementState(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccManagementFolderSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SccManagementFolderSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccManagementFolderSecurityHealthAnalyticsCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccManagementFolderSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccManagementFolderSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.ancestorModule">ancestorModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lastEditor">lastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfigInput">customConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementState">enablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.location">location</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ancestorModule`<sup>Required</sup> <a name="ancestorModule" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```typescript
public readonly ancestorModule: string;
```

- *Type:* string

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```typescript
public readonly customConfig: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```typescript
public readonly lastEditor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```typescript
public readonly timeouts: SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `customConfigInput`<sup>Optional</sup> <a name="customConfigInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```typescript
public readonly customConfigInput: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```typescript
public readonly enablementStateInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

const sccManagementFolderSecurityHealthAnalyticsCustomModuleConfig: sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.folder">folder</a></code> | <code>string</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>string</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#id SccManagementFolderSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.location">location</a></code> | <code>string</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#folder SccManagementFolderSecurityHealthAnalyticsCustomModule#folder}

---

##### `customConfig`<sup>Optional</sup> <a name="customConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```typescript
public readonly customConfig: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#custom_config SccManagementFolderSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#display_name SccManagementFolderSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#enablement_state SccManagementFolderSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#id SccManagementFolderSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#timeouts SccManagementFolderSecurityHealthAnalyticsCustomModule#timeouts}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

const sccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig: sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">description</a></code> | <code>string</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>string</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">severity</a></code> | <code>string</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `customOutput`<sup>Optional</sup> <a name="customOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```typescript
public readonly customOutput: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#custom_output SccManagementFolderSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```typescript
public readonly predicate: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#predicate SccManagementFolderSecurityHealthAnalyticsCustomModule#predicate}

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#recommendation SccManagementFolderSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `resourceSelector`<sup>Optional</sup> <a name="resourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```typescript
public readonly resourceSelector: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#resource_selector SccManagementFolderSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#severity SccManagementFolderSecurityHealthAnalyticsCustomModule#severity}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

const sccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput: sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>[]</code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```typescript
public readonly properties: IResolvable | SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>[]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#properties SccManagementFolderSecurityHealthAnalyticsCustomModule#properties}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

const sccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties: sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>string</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#name SccManagementFolderSecurityHealthAnalyticsCustomModule#name}

---

##### `valueExpression`<sup>Optional</sup> <a name="valueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```typescript
public readonly valueExpression: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#value_expression SccManagementFolderSecurityHealthAnalyticsCustomModule#value_expression}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

const sccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression: sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#expression SccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#title SccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

const sccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate: sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#expression SccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#title SccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

const sccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector: sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | The resource types to run the detector on. |

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#resource_types SccManagementFolderSecurityHealthAnalyticsCustomModule#resource_types}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

const sccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts: sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#create SccManagementFolderSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#delete SccManagementFolderSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#update SccManagementFolderSecurityHealthAnalyticsCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#create SccManagementFolderSecurityHealthAnalyticsCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#delete SccManagementFolderSecurityHealthAnalyticsCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#update SccManagementFolderSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

new sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```typescript
public putProperties(value: IResolvable | SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>[]

---

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```typescript
public readonly properties: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

new sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```typescript
public get(index: number): SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>[]

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

new sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">putValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">resetValueExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueExpression` <a name="putValueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```typescript
public putValueExpression(value: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValueExpression` <a name="resetValueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```typescript
public resetValueExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">valueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueExpression`<sup>Required</sup> <a name="valueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```typescript
public readonly valueExpression: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueExpressionInput`<sup>Optional</sup> <a name="valueExpressionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```typescript
public readonly valueExpressionInput: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

new sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

new sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">putCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">putResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">resetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetPredicate">resetPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetRecommendation">resetRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetResourceSelector">resetResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomOutput` <a name="putCustomOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```typescript
public putCustomOutput(value: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```typescript
public putPredicate(value: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `putResourceSelector` <a name="putResourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```typescript
public putResourceSelector(value: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `resetCustomOutput` <a name="resetCustomOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```typescript
public resetCustomOutput(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPredicate` <a name="resetPredicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetPredicate"></a>

```typescript
public resetPredicate(): void
```

##### `resetRecommendation` <a name="resetRecommendation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetRecommendation"></a>

```typescript
public resetRecommendation(): void
```

##### `resetResourceSelector` <a name="resetResourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetResourceSelector"></a>

```typescript
public resetResourceSelector(): void
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetSeverity"></a>

```typescript
public resetSeverity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">customOutputInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">predicateInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customOutput`<sup>Required</sup> <a name="customOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```typescript
public readonly customOutput: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```typescript
public readonly predicate: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```typescript
public readonly resourceSelector: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `customOutputInput`<sup>Optional</sup> <a name="customOutputInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```typescript
public readonly customOutputInput: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```typescript
public readonly predicateInput: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `recommendationInput`<sup>Optional</sup> <a name="recommendationInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```typescript
public readonly recommendationInput: string;
```

- *Type:* string

---

##### `resourceSelectorInput`<sup>Optional</sup> <a name="resourceSelectorInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```typescript
public readonly resourceSelectorInput: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```typescript
public readonly recommendation: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

new sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

new sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector;
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { sccManagementFolderSecurityHealthAnalyticsCustomModule } from '@cdktf/provider-google'

new sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

---



