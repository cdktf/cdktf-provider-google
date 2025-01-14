# `monitoringUptimeCheckConfig` Submodule <a name="`monitoringUptimeCheckConfig` Submodule" id="@cdktf/provider-google.monitoringUptimeCheckConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringUptimeCheckConfig <a name="MonitoringUptimeCheckConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config google_monitoring_uptime_check_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig(scope: Construct, id: string, config: MonitoringUptimeCheckConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig">MonitoringUptimeCheckConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig">MonitoringUptimeCheckConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putContentMatchers">putContentMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putHttpCheck">putHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putMonitoredResource">putMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putResourceGroup">putResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putSyntheticMonitor">putSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTcpCheck">putTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetCheckerType">resetCheckerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetContentMatchers">resetContentMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetHttpCheck">resetHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetMonitoredResource">resetMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetSelectedRegions">resetSelectedRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetSyntheticMonitor">resetSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetTcpCheck">resetTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentMatchers` <a name="putContentMatchers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putContentMatchers"></a>

```typescript
public putContentMatchers(value: IResolvable | MonitoringUptimeCheckConfigContentMatchers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putContentMatchers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers">MonitoringUptimeCheckConfigContentMatchers</a>[]

---

##### `putHttpCheck` <a name="putHttpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putHttpCheck"></a>

```typescript
public putHttpCheck(value: MonitoringUptimeCheckConfigHttpCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putHttpCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a>

---

##### `putMonitoredResource` <a name="putMonitoredResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putMonitoredResource"></a>

```typescript
public putMonitoredResource(value: MonitoringUptimeCheckConfigMonitoredResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putMonitoredResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a>

---

##### `putResourceGroup` <a name="putResourceGroup" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putResourceGroup"></a>

```typescript
public putResourceGroup(value: MonitoringUptimeCheckConfigResourceGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putResourceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a>

---

##### `putSyntheticMonitor` <a name="putSyntheticMonitor" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putSyntheticMonitor"></a>

```typescript
public putSyntheticMonitor(value: MonitoringUptimeCheckConfigSyntheticMonitor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putSyntheticMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a>

---

##### `putTcpCheck` <a name="putTcpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTcpCheck"></a>

```typescript
public putTcpCheck(value: MonitoringUptimeCheckConfigTcpCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTcpCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitoringUptimeCheckConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts">MonitoringUptimeCheckConfigTimeouts</a>

---

##### `resetCheckerType` <a name="resetCheckerType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetCheckerType"></a>

```typescript
public resetCheckerType(): void
```

##### `resetContentMatchers` <a name="resetContentMatchers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetContentMatchers"></a>

```typescript
public resetContentMatchers(): void
```

##### `resetHttpCheck` <a name="resetHttpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetHttpCheck"></a>

```typescript
public resetHttpCheck(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMonitoredResource` <a name="resetMonitoredResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetMonitoredResource"></a>

```typescript
public resetMonitoredResource(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetResourceGroup"></a>

```typescript
public resetResourceGroup(): void
```

##### `resetSelectedRegions` <a name="resetSelectedRegions" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetSelectedRegions"></a>

```typescript
public resetSelectedRegions(): void
```

##### `resetSyntheticMonitor` <a name="resetSyntheticMonitor" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetSyntheticMonitor"></a>

```typescript
public resetSyntheticMonitor(): void
```

##### `resetTcpCheck` <a name="resetTcpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetTcpCheck"></a>

```typescript
public resetTcpCheck(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.resetUserLabels"></a>

```typescript
public resetUserLabels(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringUptimeCheckConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isConstruct"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformElement"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformResource"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitoringUptimeCheckConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringUptimeCheckConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringUptimeCheckConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringUptimeCheckConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.contentMatchers">contentMatchers</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList">MonitoringUptimeCheckConfigContentMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.httpCheck">httpCheck</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference">MonitoringUptimeCheckConfigHttpCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.monitoredResource">monitoredResource</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference">MonitoringUptimeCheckConfigMonitoredResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.resourceGroup">resourceGroup</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference">MonitoringUptimeCheckConfigResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.syntheticMonitor">syntheticMonitor</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference">MonitoringUptimeCheckConfigSyntheticMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tcpCheck">tcpCheck</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference">MonitoringUptimeCheckConfigTcpCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference">MonitoringUptimeCheckConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.uptimeCheckId">uptimeCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.checkerTypeInput">checkerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.contentMatchersInput">contentMatchersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers">MonitoringUptimeCheckConfigContentMatchers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.httpCheckInput">httpCheckInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.monitoredResourceInput">monitoredResourceInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.resourceGroupInput">resourceGroupInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.selectedRegionsInput">selectedRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.syntheticMonitorInput">syntheticMonitorInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tcpCheckInput">tcpCheckInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts">MonitoringUptimeCheckConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.userLabelsInput">userLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.checkerType">checkerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.selectedRegions">selectedRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.userLabels">userLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentMatchers`<sup>Required</sup> <a name="contentMatchers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.contentMatchers"></a>

```typescript
public readonly contentMatchers: MonitoringUptimeCheckConfigContentMatchersList;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList">MonitoringUptimeCheckConfigContentMatchersList</a>

---

##### `httpCheck`<sup>Required</sup> <a name="httpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.httpCheck"></a>

```typescript
public readonly httpCheck: MonitoringUptimeCheckConfigHttpCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference">MonitoringUptimeCheckConfigHttpCheckOutputReference</a>

---

##### `monitoredResource`<sup>Required</sup> <a name="monitoredResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.monitoredResource"></a>

```typescript
public readonly monitoredResource: MonitoringUptimeCheckConfigMonitoredResourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference">MonitoringUptimeCheckConfigMonitoredResourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: MonitoringUptimeCheckConfigResourceGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference">MonitoringUptimeCheckConfigResourceGroupOutputReference</a>

---

##### `syntheticMonitor`<sup>Required</sup> <a name="syntheticMonitor" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.syntheticMonitor"></a>

```typescript
public readonly syntheticMonitor: MonitoringUptimeCheckConfigSyntheticMonitorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference">MonitoringUptimeCheckConfigSyntheticMonitorOutputReference</a>

---

##### `tcpCheck`<sup>Required</sup> <a name="tcpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tcpCheck"></a>

```typescript
public readonly tcpCheck: MonitoringUptimeCheckConfigTcpCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference">MonitoringUptimeCheckConfigTcpCheckOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringUptimeCheckConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference">MonitoringUptimeCheckConfigTimeoutsOutputReference</a>

---

##### `uptimeCheckId`<sup>Required</sup> <a name="uptimeCheckId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.uptimeCheckId"></a>

```typescript
public readonly uptimeCheckId: string;
```

- *Type:* string

---

##### `checkerTypeInput`<sup>Optional</sup> <a name="checkerTypeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.checkerTypeInput"></a>

```typescript
public readonly checkerTypeInput: string;
```

- *Type:* string

---

##### `contentMatchersInput`<sup>Optional</sup> <a name="contentMatchersInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.contentMatchersInput"></a>

```typescript
public readonly contentMatchersInput: IResolvable | MonitoringUptimeCheckConfigContentMatchers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers">MonitoringUptimeCheckConfigContentMatchers</a>[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `httpCheckInput`<sup>Optional</sup> <a name="httpCheckInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.httpCheckInput"></a>

```typescript
public readonly httpCheckInput: MonitoringUptimeCheckConfigHttpCheck;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monitoredResourceInput`<sup>Optional</sup> <a name="monitoredResourceInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.monitoredResourceInput"></a>

```typescript
public readonly monitoredResourceInput: MonitoringUptimeCheckConfigMonitoredResource;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.resourceGroupInput"></a>

```typescript
public readonly resourceGroupInput: MonitoringUptimeCheckConfigResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a>

---

##### `selectedRegionsInput`<sup>Optional</sup> <a name="selectedRegionsInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.selectedRegionsInput"></a>

```typescript
public readonly selectedRegionsInput: string[];
```

- *Type:* string[]

---

##### `syntheticMonitorInput`<sup>Optional</sup> <a name="syntheticMonitorInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.syntheticMonitorInput"></a>

```typescript
public readonly syntheticMonitorInput: MonitoringUptimeCheckConfigSyntheticMonitor;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a>

---

##### `tcpCheckInput`<sup>Optional</sup> <a name="tcpCheckInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tcpCheckInput"></a>

```typescript
public readonly tcpCheckInput: MonitoringUptimeCheckConfigTcpCheck;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitoringUptimeCheckConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts">MonitoringUptimeCheckConfigTimeouts</a>

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.userLabelsInput"></a>

```typescript
public readonly userLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `checkerType`<sup>Required</sup> <a name="checkerType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.checkerType"></a>

```typescript
public readonly checkerType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `selectedRegions`<sup>Required</sup> <a name="selectedRegions" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.selectedRegions"></a>

```typescript
public readonly selectedRegions: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.userLabels"></a>

```typescript
public readonly userLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringUptimeCheckConfigConfig <a name="MonitoringUptimeCheckConfigConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigConfig: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | A human-friendly name for the uptime check configuration. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.timeout">timeout</a></code> | <code>string</code> | The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.checkerType">checkerType</a></code> | <code>string</code> | The checker type to use for the check. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.contentMatchers">contentMatchers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers">MonitoringUptimeCheckConfigContentMatchers</a>[]</code> | content_matchers block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.httpCheck">httpCheck</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a></code> | http_check block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#id MonitoringUptimeCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.monitoredResource">monitoredResource</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a></code> | monitored_resource block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.period">period</a></code> | <code>string</code> | How often, in seconds, the uptime check is performed. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#project MonitoringUptimeCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.resourceGroup">resourceGroup</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a></code> | resource_group block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.selectedRegions">selectedRegions</a></code> | <code>string[]</code> | The list of regions from which the check will be run. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.syntheticMonitor">syntheticMonitor</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a></code> | synthetic_monitor block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.tcpCheck">tcpCheck</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a></code> | tcp_check block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts">MonitoringUptimeCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.userLabels">userLabels</a></code> | <code>{[ key: string ]: string}</code> | User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A human-friendly name for the uptime check configuration.

The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#display_name MonitoringUptimeCheckConfig#display_name}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds).

[See the accepted formats]( https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#timeout MonitoringUptimeCheckConfig#timeout}

---

##### `checkerType`<sup>Optional</sup> <a name="checkerType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.checkerType"></a>

```typescript
public readonly checkerType: string;
```

- *Type:* string

The checker type to use for the check.

If the monitored resource type is 'servicedirectory_service', 'checker_type' must be set to 'VPC_CHECKERS'. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#checker_type MonitoringUptimeCheckConfig#checker_type}

---

##### `contentMatchers`<sup>Optional</sup> <a name="contentMatchers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.contentMatchers"></a>

```typescript
public readonly contentMatchers: IResolvable | MonitoringUptimeCheckConfigContentMatchers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers">MonitoringUptimeCheckConfigContentMatchers</a>[]

content_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#content_matchers MonitoringUptimeCheckConfig#content_matchers}

---

##### `httpCheck`<sup>Optional</sup> <a name="httpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.httpCheck"></a>

```typescript
public readonly httpCheck: MonitoringUptimeCheckConfigHttpCheck;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a>

http_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#http_check MonitoringUptimeCheckConfig#http_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#id MonitoringUptimeCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitoredResource`<sup>Optional</sup> <a name="monitoredResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.monitoredResource"></a>

```typescript
public readonly monitoredResource: MonitoringUptimeCheckConfigMonitoredResource;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a>

monitored_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#monitored_resource MonitoringUptimeCheckConfig#monitored_resource}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

How often, in seconds, the uptime check is performed.

Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#period MonitoringUptimeCheckConfig#period}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#project MonitoringUptimeCheckConfig#project}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: MonitoringUptimeCheckConfigResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a>

resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#resource_group MonitoringUptimeCheckConfig#resource_group}

---

##### `selectedRegions`<sup>Optional</sup> <a name="selectedRegions" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.selectedRegions"></a>

```typescript
public readonly selectedRegions: string[];
```

- *Type:* string[]

The list of regions from which the check will be run.

Some regions contain one location, and others contain more than one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error message is returned. Not specifying this field will result in uptime checks running from all regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#selected_regions MonitoringUptimeCheckConfig#selected_regions}

---

##### `syntheticMonitor`<sup>Optional</sup> <a name="syntheticMonitor" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.syntheticMonitor"></a>

```typescript
public readonly syntheticMonitor: MonitoringUptimeCheckConfigSyntheticMonitor;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a>

synthetic_monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#synthetic_monitor MonitoringUptimeCheckConfig#synthetic_monitor}

---

##### `tcpCheck`<sup>Optional</sup> <a name="tcpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.tcpCheck"></a>

```typescript
public readonly tcpCheck: MonitoringUptimeCheckConfigTcpCheck;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a>

tcp_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#tcp_check MonitoringUptimeCheckConfig#tcp_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringUptimeCheckConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts">MonitoringUptimeCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#timeouts MonitoringUptimeCheckConfig#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigConfig.property.userLabels"></a>

```typescript
public readonly userLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects.

The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#user_labels MonitoringUptimeCheckConfig#user_labels}

---

### MonitoringUptimeCheckConfigContentMatchers <a name="MonitoringUptimeCheckConfigContentMatchers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigContentMatchers: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.content">content</a></code> | <code>string</code> | String or regex content to match (max 1024 bytes). |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.jsonPathMatcher">jsonPathMatcher</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | json_path_matcher block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.matcher">matcher</a></code> | <code>string</code> | The type of content matcher that will be applied to the server output, compared to the content string when the check is run. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

String or regex content to match (max 1024 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#content MonitoringUptimeCheckConfig#content}

---

##### `jsonPathMatcher`<sup>Optional</sup> <a name="jsonPathMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.jsonPathMatcher"></a>

```typescript
public readonly jsonPathMatcher: MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

json_path_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#json_path_matcher MonitoringUptimeCheckConfig#json_path_matcher}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

The type of content matcher that will be applied to the server output, compared to the content string when the check is run.

Default value: "CONTAINS_STRING" Possible values: ["CONTAINS_STRING", "NOT_CONTAINS_STRING", "MATCHES_REGEX", "NOT_MATCHES_REGEX", "MATCHES_JSON_PATH", "NOT_MATCHES_JSON_PATH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#matcher MonitoringUptimeCheckConfig#matcher}

---

### MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher <a name="MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigContentMatchersJsonPathMatcher: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonPath">jsonPath</a></code> | <code>string</code> | JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonMatcher">jsonMatcher</a></code> | <code>string</code> | Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"]. |

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

JSONPath within the response output pointing to the expected 'ContentMatcher::content' to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#json_path MonitoringUptimeCheckConfig#json_path}

---

##### `jsonMatcher`<sup>Optional</sup> <a name="jsonMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher.property.jsonMatcher"></a>

```typescript
public readonly jsonMatcher: string;
```

- *Type:* string

Options to perform JSONPath content matching. Default value: "EXACT_MATCH" Possible values: ["EXACT_MATCH", "REGEX_MATCH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#json_matcher MonitoringUptimeCheckConfig#json_matcher}

---

### MonitoringUptimeCheckConfigHttpCheck <a name="MonitoringUptimeCheckConfigHttpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigHttpCheck: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.acceptedResponseStatusCodes">acceptedResponseStatusCodes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>[]</code> | accepted_response_status_codes block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.authInfo">authInfo</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | auth_info block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.body">body</a></code> | <code>string</code> | The request body associated with the HTTP POST request. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.contentType">contentType</a></code> | <code>string</code> | The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED", "USER_PROVIDED"]. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.customContentType">customContentType</a></code> | <code>string</code> | A user provided content type header to use for the check. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | The list of headers to send as part of the uptime check request. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.maskHeaders">maskHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean specifying whether to encrypt the header information. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.path">path</a></code> | <code>string</code> | The path to the page to run the check against. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.pingConfig">pingConfig</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | ping_config block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.port">port</a></code> | <code>number</code> | The port to the page to run the check against. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.requestMethod">requestMethod</a></code> | <code>string</code> | The HTTP request method to use for the check. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.serviceAgentAuthentication">serviceAgentAuthentication</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | service_agent_authentication block. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.useSsl">useSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, use HTTPS instead of HTTP to run the check. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.validateSsl">validateSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. |

---

##### `acceptedResponseStatusCodes`<sup>Optional</sup> <a name="acceptedResponseStatusCodes" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.acceptedResponseStatusCodes"></a>

```typescript
public readonly acceptedResponseStatusCodes: IResolvable | MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>[]

accepted_response_status_codes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#accepted_response_status_codes MonitoringUptimeCheckConfig#accepted_response_status_codes}

---

##### `authInfo`<sup>Optional</sup> <a name="authInfo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.authInfo"></a>

```typescript
public readonly authInfo: MonitoringUptimeCheckConfigHttpCheckAuthInfo;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

auth_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#auth_info MonitoringUptimeCheckConfig#auth_info}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

The request body associated with the HTTP POST request.

If 'content_type' is 'URL_ENCODED', the body passed in must be URL-encoded. Users can provide a 'Content-Length' header via the 'headers' field or the API will do so. If the 'request_method' is 'GET' and 'body' is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note - As with all bytes fields JSON representations are base64 encoded. e.g. 'foo=bar' in URL-encoded form is 'foo%3Dbar' and in base64 encoding is 'Zm9vJTI1M0RiYXI='.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#body MonitoringUptimeCheckConfig#body}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The content type to use for the check. Possible values: ["TYPE_UNSPECIFIED", "URL_ENCODED", "USER_PROVIDED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#content_type MonitoringUptimeCheckConfig#content_type}

---

##### `customContentType`<sup>Optional</sup> <a name="customContentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.customContentType"></a>

```typescript
public readonly customContentType: string;
```

- *Type:* string

A user provided content type header to use for the check.

The invalid configurations outlined in the 'content_type' field apply to custom_content_type', as well as the following 1. 'content_type' is 'URL_ENCODED' and 'custom_content_type' is set. 2. 'content_type' is 'USER_PROVIDED' and 'custom_content_type' is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#custom_content_type MonitoringUptimeCheckConfig#custom_content_type}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The list of headers to send as part of the uptime check request.

If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described in [RFC 2616 (page 31)](https://www.w3.org/Protocols/rfc2616/rfc2616.txt). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#headers MonitoringUptimeCheckConfig#headers}

---

##### `maskHeaders`<sup>Optional</sup> <a name="maskHeaders" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.maskHeaders"></a>

```typescript
public readonly maskHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean specifying whether to encrypt the header information.

Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if 'mask_headers' is set to 'true' then the headers will be obscured with '******'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#mask_headers MonitoringUptimeCheckConfig#mask_headers}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the page to run the check against.

Will be combined with the host (specified within the MonitoredResource) and port to construct the full URL. If the provided path does not begin with '/', a '/' will be prepended automatically. Optional (defaults to '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#path MonitoringUptimeCheckConfig#path}

---

##### `pingConfig`<sup>Optional</sup> <a name="pingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.pingConfig"></a>

```typescript
public readonly pingConfig: MonitoringUptimeCheckConfigHttpCheckPingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a>

ping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#ping_config MonitoringUptimeCheckConfig#ping_config}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port to the page to run the check against.

Will be combined with 'host' (specified within the ['monitored_resource'](#nested_monitored_resource)) and path to construct the full URL. Optional (defaults to 80 without SSL, or 443 with SSL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#port MonitoringUptimeCheckConfig#port}

---

##### `requestMethod`<sup>Optional</sup> <a name="requestMethod" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

The HTTP request method to use for the check.

If set to 'METHOD_UNSPECIFIED' then 'request_method' defaults to 'GET'. Default value: "GET" Possible values: ["METHOD_UNSPECIFIED", "GET", "POST"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#request_method MonitoringUptimeCheckConfig#request_method}

---

##### `serviceAgentAuthentication`<sup>Optional</sup> <a name="serviceAgentAuthentication" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.serviceAgentAuthentication"></a>

```typescript
public readonly serviceAgentAuthentication: MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

service_agent_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#service_agent_authentication MonitoringUptimeCheckConfig#service_agent_authentication}

---

##### `useSsl`<sup>Optional</sup> <a name="useSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.useSsl"></a>

```typescript
public readonly useSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, use HTTPS instead of HTTP to run the check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#use_ssl MonitoringUptimeCheckConfig#use_ssl}

---

##### `validateSsl`<sup>Optional</sup> <a name="validateSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck.property.validateSsl"></a>

```typescript
public readonly validateSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean specifying whether to include SSL certificate validation as a part of the Uptime check.

Only applies to checks where 'monitored_resource' is set to 'uptime_url'. If 'use_ssl' is 'false', setting 'validate_ssl' to 'true' has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#validate_ssl MonitoringUptimeCheckConfig#validate_ssl}

---

### MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes <a name="MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusClass">statusClass</a></code> | <code>string</code> | A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"]. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusValue">statusValue</a></code> | <code>number</code> | A status code to accept. |

---

##### `statusClass`<sup>Optional</sup> <a name="statusClass" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusClass"></a>

```typescript
public readonly statusClass: string;
```

- *Type:* string

A class of status codes to accept. Possible values: ["STATUS_CLASS_1XX", "STATUS_CLASS_2XX", "STATUS_CLASS_3XX", "STATUS_CLASS_4XX", "STATUS_CLASS_5XX", "STATUS_CLASS_ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#status_class MonitoringUptimeCheckConfig#status_class}

---

##### `statusValue`<sup>Optional</sup> <a name="statusValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes.property.statusValue"></a>

```typescript
public readonly statusValue: number;
```

- *Type:* number

A status code to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#status_value MonitoringUptimeCheckConfig#status_value}

---

### MonitoringUptimeCheckConfigHttpCheckAuthInfo <a name="MonitoringUptimeCheckConfigHttpCheckAuthInfo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigHttpCheckAuthInfo: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.password">password</a></code> | <code>string</code> | The password to authenticate. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.username">username</a></code> | <code>string</code> | The username to authenticate. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#password MonitoringUptimeCheckConfig#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#username MonitoringUptimeCheckConfig#username}

---

### MonitoringUptimeCheckConfigHttpCheckPingConfig <a name="MonitoringUptimeCheckConfigHttpCheckPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigHttpCheckPingConfig: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig.property.pingsCount">pingsCount</a></code> | <code>number</code> | Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. |

---

##### `pingsCount`<sup>Required</sup> <a name="pingsCount" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig.property.pingsCount"></a>

```typescript
public readonly pingsCount: number;
```

- *Type:* number

Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#pings_count MonitoringUptimeCheckConfig#pings_count}

---

### MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication <a name="MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.property.type">type</a></code> | <code>string</code> | The type of authentication to use. Possible values: ["SERVICE_AGENT_AUTHENTICATION_TYPE_UNSPECIFIED", "OIDC_TOKEN"]. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of authentication to use. Possible values: ["SERVICE_AGENT_AUTHENTICATION_TYPE_UNSPECIFIED", "OIDC_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#type MonitoringUptimeCheckConfig#type}

---

### MonitoringUptimeCheckConfigMonitoredResource <a name="MonitoringUptimeCheckConfigMonitoredResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigMonitoredResource: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Values for all of the labels listed in the associated monitored resource descriptor. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource.property.type">type</a></code> | <code>string</code> | The monitored resource type. |

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Values for all of the labels listed in the associated monitored resource descriptor.

For example, Compute Engine VM instances use the labels 'project_id', 'instance_id', and 'zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#labels MonitoringUptimeCheckConfig#labels}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The monitored resource type.

This field must match the type field of a ['MonitoredResourceDescriptor'](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.monitoredResourceDescriptors#MonitoredResourceDescriptor) object. For example, the type of a Compute Engine VM instance is 'gce_instance'. For a list of types, see [Monitoring resource types](https://cloud.google.com/monitoring/api/resources) and [Logging resource types](https://cloud.google.com/logging/docs/api/v2/resource-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#type MonitoringUptimeCheckConfig#type}

---

### MonitoringUptimeCheckConfigResourceGroup <a name="MonitoringUptimeCheckConfigResourceGroup" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigResourceGroup: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup.property.groupId">groupId</a></code> | <code>string</code> | The group of resources being monitored. Should be the 'name' of a group. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup.property.resourceType">resourceType</a></code> | <code>string</code> | The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"]. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The group of resources being monitored. Should be the 'name' of a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#group_id MonitoringUptimeCheckConfig#group_id}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The resource type of the group members. Possible values: ["RESOURCE_TYPE_UNSPECIFIED", "INSTANCE", "AWS_ELB_LOAD_BALANCER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#resource_type MonitoringUptimeCheckConfig#resource_type}

---

### MonitoringUptimeCheckConfigSyntheticMonitor <a name="MonitoringUptimeCheckConfigSyntheticMonitor" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigSyntheticMonitor: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor.property.cloudFunctionV2">cloudFunctionV2</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | cloud_function_v2 block. |

---

##### `cloudFunctionV2`<sup>Required</sup> <a name="cloudFunctionV2" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor.property.cloudFunctionV2"></a>

```typescript
public readonly cloudFunctionV2: MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

cloud_function_v2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#cloud_function_v2 MonitoringUptimeCheckConfig#cloud_function_v2}

---

### MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 <a name="MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.property.name">name</a></code> | <code>string</code> | The fully qualified name of the cloud function resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The fully qualified name of the cloud function resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#name MonitoringUptimeCheckConfig#name}

---

### MonitoringUptimeCheckConfigTcpCheck <a name="MonitoringUptimeCheckConfigTcpCheck" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigTcpCheck: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck.property.port">port</a></code> | <code>number</code> | The port to the page to run the check against. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck.property.pingConfig">pingConfig</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | ping_config block. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port to the page to run the check against.

Will be combined with host (specified within the 'monitored_resource') to construct the full URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#port MonitoringUptimeCheckConfig#port}

---

##### `pingConfig`<sup>Optional</sup> <a name="pingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck.property.pingConfig"></a>

```typescript
public readonly pingConfig: MonitoringUptimeCheckConfigTcpCheckPingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a>

ping_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#ping_config MonitoringUptimeCheckConfig#ping_config}

---

### MonitoringUptimeCheckConfigTcpCheckPingConfig <a name="MonitoringUptimeCheckConfigTcpCheckPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigTcpCheckPingConfig: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig.property.pingsCount">pingsCount</a></code> | <code>number</code> | Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. |

---

##### `pingsCount`<sup>Required</sup> <a name="pingsCount" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig.property.pingsCount"></a>

```typescript
public readonly pingsCount: number;
```

- *Type:* number

Number of ICMP pings. A maximum of 3 ICMP pings is currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#pings_count MonitoringUptimeCheckConfig#pings_count}

---

### MonitoringUptimeCheckConfigTimeouts <a name="MonitoringUptimeCheckConfigTimeouts" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

const monitoringUptimeCheckConfigTimeouts: monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#create MonitoringUptimeCheckConfig#create}. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#delete MonitoringUptimeCheckConfig#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#update MonitoringUptimeCheckConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#create MonitoringUptimeCheckConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#delete MonitoringUptimeCheckConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/monitoring_uptime_check_config#update MonitoringUptimeCheckConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference <a name="MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resetJsonMatcher">resetJsonMatcher</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonMatcher` <a name="resetJsonMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.resetJsonMatcher"></a>

```typescript
public resetJsonMatcher(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcherInput">jsonMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPathInput">jsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcher">jsonMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPath">jsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonMatcherInput`<sup>Optional</sup> <a name="jsonMatcherInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcherInput"></a>

```typescript
public readonly jsonMatcherInput: string;
```

- *Type:* string

---

##### `jsonPathInput`<sup>Optional</sup> <a name="jsonPathInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPathInput"></a>

```typescript
public readonly jsonPathInput: string;
```

- *Type:* string

---

##### `jsonMatcher`<sup>Required</sup> <a name="jsonMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonMatcher"></a>

```typescript
public readonly jsonMatcher: string;
```

- *Type:* string

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---


### MonitoringUptimeCheckConfigContentMatchersList <a name="MonitoringUptimeCheckConfigContentMatchersList" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.get"></a>

```typescript
public get(index: number): MonitoringUptimeCheckConfigContentMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers">MonitoringUptimeCheckConfigContentMatchers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringUptimeCheckConfigContentMatchers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers">MonitoringUptimeCheckConfigContentMatchers</a>[]

---


### MonitoringUptimeCheckConfigContentMatchersOutputReference <a name="MonitoringUptimeCheckConfigContentMatchersOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher">putJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resetJsonPathMatcher">resetJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resetMatcher">resetMatcher</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJsonPathMatcher` <a name="putJsonPathMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher"></a>

```typescript
public putJsonPathMatcher(value: MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.putJsonPathMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---

##### `resetJsonPathMatcher` <a name="resetJsonPathMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resetJsonPathMatcher"></a>

```typescript
public resetJsonPathMatcher(): void
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.resetMatcher"></a>

```typescript
public resetMatcher(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcher">jsonPathMatcher</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcherInput">jsonPathMatcherInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcherInput">matcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcher">matcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers">MonitoringUptimeCheckConfigContentMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonPathMatcher`<sup>Required</sup> <a name="jsonPathMatcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcher"></a>

```typescript
public readonly jsonPathMatcher: MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcherOutputReference</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `jsonPathMatcherInput`<sup>Optional</sup> <a name="jsonPathMatcherInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.jsonPathMatcherInput"></a>

```typescript
public readonly jsonPathMatcherInput: MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher">MonitoringUptimeCheckConfigContentMatchersJsonPathMatcher</a>

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcherInput"></a>

```typescript
public readonly matcherInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.matcher"></a>

```typescript
public readonly matcher: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringUptimeCheckConfigContentMatchers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigContentMatchers">MonitoringUptimeCheckConfigContentMatchers</a>

---


### MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList <a name="MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get"></a>

```typescript
public get(index: number): MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>[]

---


### MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference <a name="MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusClass">resetStatusClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusValue">resetStatusValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatusClass` <a name="resetStatusClass" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusClass"></a>

```typescript
public resetStatusClass(): void
```

##### `resetStatusValue` <a name="resetStatusValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.resetStatusValue"></a>

```typescript
public resetStatusValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClassInput">statusClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValueInput">statusValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClass">statusClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValue">statusValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusClassInput`<sup>Optional</sup> <a name="statusClassInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClassInput"></a>

```typescript
public readonly statusClassInput: string;
```

- *Type:* string

---

##### `statusValueInput`<sup>Optional</sup> <a name="statusValueInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValueInput"></a>

```typescript
public readonly statusValueInput: number;
```

- *Type:* number

---

##### `statusClass`<sup>Required</sup> <a name="statusClass" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusClass"></a>

```typescript
public readonly statusClass: string;
```

- *Type:* string

---

##### `statusValue`<sup>Required</sup> <a name="statusValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.statusValue"></a>

```typescript
public readonly statusValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>

---


### MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference <a name="MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigHttpCheckAuthInfo;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---


### MonitoringUptimeCheckConfigHttpCheckOutputReference <a name="MonitoringUptimeCheckConfigHttpCheckOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes">putAcceptedResponseStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo">putAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig">putPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication">putServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetAcceptedResponseStatusCodes">resetAcceptedResponseStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetAuthInfo">resetAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetCustomContentType">resetCustomContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetMaskHeaders">resetMaskHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPingConfig">resetPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetRequestMethod">resetRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetServiceAgentAuthentication">resetServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetUseSsl">resetUseSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetValidateSsl">resetValidateSsl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcceptedResponseStatusCodes` <a name="putAcceptedResponseStatusCodes" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes"></a>

```typescript
public putAcceptedResponseStatusCodes(value: IResolvable | MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAcceptedResponseStatusCodes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>[]

---

##### `putAuthInfo` <a name="putAuthInfo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo"></a>

```typescript
public putAuthInfo(value: MonitoringUptimeCheckConfigHttpCheckAuthInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putAuthInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---

##### `putPingConfig` <a name="putPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig"></a>

```typescript
public putPingConfig(value: MonitoringUptimeCheckConfigHttpCheckPingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putPingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---

##### `putServiceAgentAuthentication` <a name="putServiceAgentAuthentication" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication"></a>

```typescript
public putServiceAgentAuthentication(value: MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.putServiceAgentAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---

##### `resetAcceptedResponseStatusCodes` <a name="resetAcceptedResponseStatusCodes" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetAcceptedResponseStatusCodes"></a>

```typescript
public resetAcceptedResponseStatusCodes(): void
```

##### `resetAuthInfo` <a name="resetAuthInfo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetAuthInfo"></a>

```typescript
public resetAuthInfo(): void
```

##### `resetBody` <a name="resetBody" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetCustomContentType` <a name="resetCustomContentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetCustomContentType"></a>

```typescript
public resetCustomContentType(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetMaskHeaders` <a name="resetMaskHeaders" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetMaskHeaders"></a>

```typescript
public resetMaskHeaders(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPingConfig` <a name="resetPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPingConfig"></a>

```typescript
public resetPingConfig(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetRequestMethod` <a name="resetRequestMethod" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetRequestMethod"></a>

```typescript
public resetRequestMethod(): void
```

##### `resetServiceAgentAuthentication` <a name="resetServiceAgentAuthentication" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetServiceAgentAuthentication"></a>

```typescript
public resetServiceAgentAuthentication(): void
```

##### `resetUseSsl` <a name="resetUseSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetUseSsl"></a>

```typescript
public resetUseSsl(): void
```

##### `resetValidateSsl` <a name="resetValidateSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.resetValidateSsl"></a>

```typescript
public resetValidateSsl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodes">acceptedResponseStatusCodes</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfo">authInfo</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference">MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfig">pingConfig</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference">MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthentication">serviceAgentAuthentication</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodesInput">acceptedResponseStatusCodesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfoInput">authInfoInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentTypeInput">customContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeadersInput">maskHeadersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfigInput">pingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethodInput">requestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthenticationInput">serviceAgentAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSslInput">useSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSslInput">validateSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentType">customContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeaders">maskHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethod">requestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSsl">useSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSsl">validateSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceptedResponseStatusCodes`<sup>Required</sup> <a name="acceptedResponseStatusCodes" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodes"></a>

```typescript
public readonly acceptedResponseStatusCodes: MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodesList</a>

---

##### `authInfo`<sup>Required</sup> <a name="authInfo" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfo"></a>

```typescript
public readonly authInfo: MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference">MonitoringUptimeCheckConfigHttpCheckAuthInfoOutputReference</a>

---

##### `pingConfig`<sup>Required</sup> <a name="pingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfig"></a>

```typescript
public readonly pingConfig: MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference">MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference</a>

---

##### `serviceAgentAuthentication`<sup>Required</sup> <a name="serviceAgentAuthentication" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthentication"></a>

```typescript
public readonly serviceAgentAuthentication: MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference</a>

---

##### `acceptedResponseStatusCodesInput`<sup>Optional</sup> <a name="acceptedResponseStatusCodesInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.acceptedResponseStatusCodesInput"></a>

```typescript
public readonly acceptedResponseStatusCodesInput: IResolvable | MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes">MonitoringUptimeCheckConfigHttpCheckAcceptedResponseStatusCodes</a>[]

---

##### `authInfoInput`<sup>Optional</sup> <a name="authInfoInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.authInfoInput"></a>

```typescript
public readonly authInfoInput: MonitoringUptimeCheckConfigHttpCheckAuthInfo;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckAuthInfo">MonitoringUptimeCheckConfigHttpCheckAuthInfo</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `customContentTypeInput`<sup>Optional</sup> <a name="customContentTypeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentTypeInput"></a>

```typescript
public readonly customContentTypeInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maskHeadersInput`<sup>Optional</sup> <a name="maskHeadersInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeadersInput"></a>

```typescript
public readonly maskHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `pingConfigInput`<sup>Optional</sup> <a name="pingConfigInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.pingConfigInput"></a>

```typescript
public readonly pingConfigInput: MonitoringUptimeCheckConfigHttpCheckPingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `requestMethodInput`<sup>Optional</sup> <a name="requestMethodInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethodInput"></a>

```typescript
public readonly requestMethodInput: string;
```

- *Type:* string

---

##### `serviceAgentAuthenticationInput`<sup>Optional</sup> <a name="serviceAgentAuthenticationInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.serviceAgentAuthenticationInput"></a>

```typescript
public readonly serviceAgentAuthenticationInput: MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---

##### `useSslInput`<sup>Optional</sup> <a name="useSslInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSslInput"></a>

```typescript
public readonly useSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validateSslInput`<sup>Optional</sup> <a name="validateSslInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSslInput"></a>

```typescript
public readonly validateSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `customContentType`<sup>Required</sup> <a name="customContentType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.customContentType"></a>

```typescript
public readonly customContentType: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maskHeaders`<sup>Required</sup> <a name="maskHeaders" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.maskHeaders"></a>

```typescript
public readonly maskHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.requestMethod"></a>

```typescript
public readonly requestMethod: string;
```

- *Type:* string

---

##### `useSsl`<sup>Required</sup> <a name="useSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.useSsl"></a>

```typescript
public readonly useSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validateSsl`<sup>Required</sup> <a name="validateSsl" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.validateSsl"></a>

```typescript
public readonly validateSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigHttpCheck;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheck">MonitoringUptimeCheckConfigHttpCheck</a>

---


### MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference <a name="MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCountInput">pingsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCount">pingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pingsCountInput`<sup>Optional</sup> <a name="pingsCountInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCountInput"></a>

```typescript
public readonly pingsCountInput: number;
```

- *Type:* number

---

##### `pingsCount`<sup>Required</sup> <a name="pingsCount" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.pingsCount"></a>

```typescript
public readonly pingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigHttpCheckPingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckPingConfig">MonitoringUptimeCheckConfigHttpCheckPingConfig</a>

---


### MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference <a name="MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication">MonitoringUptimeCheckConfigHttpCheckServiceAgentAuthentication</a>

---


### MonitoringUptimeCheckConfigMonitoredResourceOutputReference <a name="MonitoringUptimeCheckConfigMonitoredResourceOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigMonitoredResource;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigMonitoredResource">MonitoringUptimeCheckConfigMonitoredResource</a>

---


### MonitoringUptimeCheckConfigResourceGroupOutputReference <a name="MonitoringUptimeCheckConfigResourceGroupOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigResourceGroup;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigResourceGroup">MonitoringUptimeCheckConfigResourceGroup</a>

---


### MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference <a name="MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---


### MonitoringUptimeCheckConfigSyntheticMonitorOutputReference <a name="MonitoringUptimeCheckConfigSyntheticMonitorOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2">putCloudFunctionV2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudFunctionV2` <a name="putCloudFunctionV2" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2"></a>

```typescript
public putCloudFunctionV2(value: MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.putCloudFunctionV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2">cloudFunctionV2</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2Input">cloudFunctionV2Input</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudFunctionV2`<sup>Required</sup> <a name="cloudFunctionV2" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2"></a>

```typescript
public readonly cloudFunctionV2: MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2OutputReference</a>

---

##### `cloudFunctionV2Input`<sup>Optional</sup> <a name="cloudFunctionV2Input" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.cloudFunctionV2Input"></a>

```typescript
public readonly cloudFunctionV2Input: MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2">MonitoringUptimeCheckConfigSyntheticMonitorCloudFunctionV2</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigSyntheticMonitor;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigSyntheticMonitor">MonitoringUptimeCheckConfigSyntheticMonitor</a>

---


### MonitoringUptimeCheckConfigTcpCheckOutputReference <a name="MonitoringUptimeCheckConfigTcpCheckOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig">putPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.resetPingConfig">resetPingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPingConfig` <a name="putPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig"></a>

```typescript
public putPingConfig(value: MonitoringUptimeCheckConfigTcpCheckPingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.putPingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---

##### `resetPingConfig` <a name="resetPingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.resetPingConfig"></a>

```typescript
public resetPingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfig">pingConfig</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference">MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfigInput">pingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pingConfig`<sup>Required</sup> <a name="pingConfig" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfig"></a>

```typescript
public readonly pingConfig: MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference">MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference</a>

---

##### `pingConfigInput`<sup>Optional</sup> <a name="pingConfigInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.pingConfigInput"></a>

```typescript
public readonly pingConfigInput: MonitoringUptimeCheckConfigTcpCheckPingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigTcpCheck;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheck">MonitoringUptimeCheckConfigTcpCheck</a>

---


### MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference <a name="MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCountInput">pingsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCount">pingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pingsCountInput`<sup>Optional</sup> <a name="pingsCountInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCountInput"></a>

```typescript
public readonly pingsCountInput: number;
```

- *Type:* number

---

##### `pingsCount`<sup>Required</sup> <a name="pingsCount" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.pingsCount"></a>

```typescript
public readonly pingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringUptimeCheckConfigTcpCheckPingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTcpCheckPingConfig">MonitoringUptimeCheckConfigTcpCheckPingConfig</a>

---


### MonitoringUptimeCheckConfigTimeoutsOutputReference <a name="MonitoringUptimeCheckConfigTimeoutsOutputReference" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitoringUptimeCheckConfig } from '@cdktf/provider-google'

new monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts">MonitoringUptimeCheckConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringUptimeCheckConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.monitoringUptimeCheckConfig.MonitoringUptimeCheckConfigTimeouts">MonitoringUptimeCheckConfigTimeouts</a>

---



